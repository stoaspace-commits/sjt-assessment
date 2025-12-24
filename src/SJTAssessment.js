import React, { useState, useEffect, useRef } from 'react';
import { sjtQuestionsData } from './sjtQuestions';
import './sjtStyles.css';
import logo from './logo.png';

const SJTAssessment = () => {
  // --- States ---
  const [userName, setUserName] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Timer: 90 Menit (5400 Detik)
  const [timeLeft, setTimeLeft] = useState(5400); 
  const timerRef = useRef(null);

  // Flatten questions dari sjtQuestions.js (6 dimensi)
  const allQuestions = Object.entries(sjtQuestionsData).flatMap(([dim, scenarios]) => 
    scenarios.map(s => ({ ...s, dimension: dim }))
  );

  // --- Timer Logic ---
  useEffect(() => {
    if (isStarted && !isFinished && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isStarted) {
      finishTest();
    }
    return () => clearInterval(timerRef.current);
  }, [isStarted, isFinished, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (!userName.trim()) return alert("Silakan masukkan nama Anda!");
    setIsStarted(true);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (qId, type, letter) => {
    setAnswers(prev => {
      const current = prev[qId] || {};
      // Validasi: Best dan Worst tidak boleh di opsi yang sama
      if (type === 'best' && current.worst === letter) return prev;
      if (type === 'worst' && current.best === letter) return prev;
      return { ...prev, [qId]: { ...current, [type]: letter } };
    });
  };

  const finishTest = async () => {
    setIsSaving(true);
    // Simulasikan delay simpan data ke sistem/Google Sheets
    setTimeout(() => {
      setIsFinished(true);
      setIsSaving(false);
      window.scrollTo(0, 0);
    }, 2000);
  };

  // --- VIEW 1: OPENING ---
  if (!isStarted) {
    return (
      <div className="main-wrapper">
        <div className="container animate-in">
          <div className="header-area">
            <img src={logo} alt="Logo" className="app-logo" />
            <div className="badge">HRD Assessment System</div>
          </div>
          <div className="card intro-card text-center">
            <h1>Barista Situational Judgement Test</h1>
            <p className="text-muted">
              Pilihlah satu tindakan <strong>Terbaik</strong> dan satu tindakan <strong>Terburuk</strong> untuk setiap skenario yang diberikan sesuai standar operasional.
            </p>
            
            <div className="name-section">
              <label className="input-label">Nama Lengkap Kandidat</label>
              <input 
                type="text" 
                className="name-input" 
                placeholder="Masukkan nama sesuai KTP..."
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
              />
              <button className="btn-calculate" onClick={handleStart}>Mulai Penilaian</button>
            </div>

            <div className="meta-grid">
              <div className="meta-item"><span>📋</span> 90 Skenario</div>
              <div className="meta-item"><span>⏱️</span> 90 Menit</div>
              <div className="meta-item"><span>📊</span> 6 Dimensi</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 2: RESULTS (DENGAN INSTRUKSI SCREENSHOT) ---
  if (isFinished) {
    return (
      <div className="main-wrapper">
        <div className="container animate-in">
          <div className="card result-card text-center">
            <div className="success-icon">🎉</div>
            <h2>Assessment Selesai</h2>
            <p className="text-muted">Terima kasih <strong>{userName}</strong>, jawaban Anda telah tersimpan secara permanen di database HRD.</p>
            
            <div className="screenshot-container">
              <div className="screenshot-icon">📸</div>
              <div className="screenshot-text">
                <strong>INSTRUKSI PENTING:</strong>
                <p>Silakan <strong>Screenshot</strong> halaman ini sekarang sebagai bukti penyelesaian, lalu kirimkan hasilnya ke WhatsApp Tim Recruitment.</p>
              </div>
            </div>

            <div className="result-info-box">
              <p>ID Peserta: <strong>SJT-{Math.floor(Math.random()*9000)+1000}</strong></p>
              <p>Waktu Selesai: <strong>{new Date().toLocaleString('id-ID')}</strong></p>
            </div>

            <button className="btn-calculate outline" onClick={() => window.location.reload()}>
              Keluar Sistem
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 3: QUIZ ---
  const progress = (Object.keys(answers).length / allQuestions.length) * 100;

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="sticky-nav">
          <div className="nav-content">
            <span className="user-tag">👤 {userName}</span>
            <span className={`timer-tag ${timeLeft < 300 ? 'urgent' : ''}`}>
              ⏱️ {formatTime(timeLeft)}
            </span>
          </div>
          <div className="progress-container">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="questions-list">
          {allQuestions.map((q, i) => (
            <div key={q.id} className="question-card animate-in shadow-sm">
              <div className="question-header">
                <span className="question-number">Skenario {i + 1} dari {allQuestions.length}</span>
                <span className="dimension-badge">{q.dimension.toUpperCase()}</span>
              </div>
              <div className="scenario-box">{q.scenario}</div>
              
              <div className="options-container">
                {q.options.map((opt, oIdx) => {
                  const letter = String.fromCharCode(65 + oIdx);
                  const isBest = answers[q.id]?.best === letter;
                  const isWorst = answers[q.id]?.worst === letter;

                  return (
                    <div key={letter} className={`sjt-option-item ${isBest ? 'active-best' : ''} ${isWorst ? 'active-worst' : ''}`}>
                      <div className="option-info">
                        <span className="letter-circle">{letter}</span>
                        <p className="option-text-p">{opt}</p>
                      </div>
                      <div className="sjt-action-btns">
                        <button 
                          className={`sjt-btn best ${isBest ? 'selected' : ''}`}
                          onClick={() => handleAnswer(q.id, 'best', letter)}
                        >BEST</button>
                        <button 
                          className={`sjt-btn worst ${isWorst ? 'selected' : ''}`}
                          onClick={() => handleAnswer(q.id, 'worst', letter)}
                        >WORST</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="submit-area card text-center">
          <p className="test-hint">Periksa kembali, pastikan bar progress di atas telah penuh.</p>
          <button className="btn-calculate" onClick={finishTest} disabled={isSaving}>
            {isSaving ? 'Memproses...' : 'Selesaikan Assessment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SJTAssessment;
