import React, { useState, useEffect, useRef } from 'react';
import { sjtQuestionsData } from './sjtQuestions';
import './sjtStyles.css';
import logo from './logo.png';

// --- KOMPONEN HEADER GLOBAL ---
const GlobalHeader = ({ isStarted, userName, timeLeft, formatTime }) => (
  <header className="header-global">
    <div className="header-container">
      <div className="header-brand">
        <img src={logo} alt="Logo" className="header-logo-small" />
        <div className="brand-text">
          <span className="brand-main">BARISTA</span>
          <span className="brand-sub">SJT ASSESSMENT</span>
        </div>
      </div>

      {isStarted && (
        <div className="header-metrics">
          <div className="user-info-pill">
            <span className="user-icon">👤</span>
            <span className="user-name">{userName}</span>
          </div>
          <div className={`timer-pill ${timeLeft < 300 ? 'timer-urgent' : ''}`}>
            <span className="timer-icon">⏱️</span>
            <span className="timer-clock">{formatTime(timeLeft)}</span>
          </div>
        </div>
      )}
    </div>
  </header>
);

const SJTAssessment = () => {
  const [userName, setUserName] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [finalResults, setFinalResults] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5400); 
  const timerRef = useRef(null);

  const allQuestions = Object.entries(sjtQuestionsData).flatMap(([dim, scenarios]) => 
    scenarios.map(s => ({ ...s, dimension: dim }))
  );

  useEffect(() => {
    if (isStarted && !isFinished && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      finishTest();
    }
    return () => clearInterval(timerRef.current);
  }, [isStarted, isFinished, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (!userName.trim()) return alert("Silakan masukkan nama Anda!");
    setStartTime(new Date().toISOString());
    setIsStarted(true);
    window.scrollTo(0,0);
  };

  const handleAnswer = (questionId, type, option) => {
    setAnswers(prev => {
      const current = prev[questionId] || {};
      if (type === 'best') {
        if (current.worst === option) return prev;
        return { ...prev, [questionId]: { ...current, best: option } };
      } else {
        if (current.best === option) return prev;
        return { ...prev, [questionId]: { ...current, worst: option } };
      }
    });
  };

  const finishTest = async () => {
    // Logika perhitungan skor (tetap seperti aslinya)
    // ... integrasi doPost ke Google Sheets ...
    setIsFinished(true);
  };

  // --- VIEW: OPENING ---
  if (!isStarted) {
    return (
      <div className="app-wrapper">
        <GlobalHeader isStarted={false} />
        <main className="opening-main">
          <div className="opening-logo-container">
            <img src={logo} alt="Barista Logo" className="large-hero-logo" />
          </div>
          
          <div className="glass-card opening-card">
            <div className="card-badge">TAHUN 2025</div>
            <h1 className="hero-title">Professional Barista <br/>Assessment</h1>
            <p className="hero-subtitle">Evaluasi Situational Judgement untuk standar operasional dan pelayanan prima.</p>
            
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Ketik Nama Lengkap Anda..." 
                className="modern-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button className="btn-primary-start" onClick={handleStart}>
                Mulai Ujian 
                <span className="btn-icon">→</span>
              </button>
            </div>

            <div className="info-grid">
              <div className="info-item"><strong>90</strong> Skenario</div>
              <div className="info-item"><strong>90</strong> Menit</div>
              <div className="info-item"><strong>6</strong> Dimensi</div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // --- VIEW: QUIZ ---
  return (
    <div className="app-wrapper">
      <GlobalHeader 
        isStarted={true} 
        userName={userName} 
        timeLeft={timeLeft} 
        formatTime={formatTime} 
      />
      <main className="quiz-container">
        {allQuestions.map((q, idx) => (
          <div key={q.id} className="question-card shadow-sm">
            <div className="question-header">
              <span className="q-number">Pertanyaan {idx + 1}</span>
              <span className="q-category">{q.dimension.toUpperCase()}</span>
            </div>
            <p className="scenario-text">{q.scenario}</p>
            
            <div className="options-grid">
              {q.options.map((opt, oIdx) => {
                const letter = String.fromCharCode(65 + oIdx);
                const isBest = answers[q.id]?.best === letter;
                const isWorst = answers[q.id]?.worst === letter;
                return (
                  <div key={letter} className={`option-item ${isBest ? 'is-best' : ''} ${isWorst ? 'is-worst' : ''}`}>
                    <div className="option-content">
                      <span className="option-label">{letter}</span>
                      <p className="option-description">{opt}</p>
                    </div>
                    <div className="option-actions">
                      <button 
                        className={`action-btn best ${isBest ? 'active' : ''}`}
                        onClick={() => handleAnswer(q.id, 'best', letter)}
                        disabled={isWorst}
                      >Terbaik</button>
                      <button 
                        className={`action-btn worst ${isWorst ? 'active' : ''}`}
                        onClick={() => handleAnswer(q.id, 'worst', letter)}
                        disabled={isBest}
                      >Terburuk</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        
        <div className="final-action">
          <button className="btn-finish" onClick={finishTest}>Selesaikan Semua Soal</button>
        </div>
      </main>
    </div>
  );
};

export default SJTAssessment;
