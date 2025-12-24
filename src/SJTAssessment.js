import React, { useState, useEffect, useRef } from 'react';
import { sjtQuestionsData } from './sjtQuestions';
import './sjtStyles.css';
import logo from './logo.png';

const SJTAssessment = () => {
  const [userName, setUserName] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5400); // 90 Menit
  const timerRef = useRef(null);

  // Kode Rahasia Parameter
  const paramMap = {
    customerService: 'DM-P1',
    teamwork: 'DM-P2',
    integrity: 'DM-P3',
    stressManagement: 'DM-P4',
    initiative: 'DM-P5',
    accountability: 'DM-P6'
  };

  const allQuestions = Object.entries(sjtQuestionsData).flatMap(([dim, scenarios]) => 
    scenarios.map(s => ({ ...s, dimension: dim }))
  );

  useEffect(() => {
    if (isStarted && !isFinished && timeLeft > 0) {
      timerRef.current = setInterval(() => setTimeLeft(p => p - 1), 1000);
    } else if (timeLeft === 0 && isStarted) {
      handleFinish();
    }
    return () => clearInterval(timerRef.current);
  }, [isStarted, isFinished, timeLeft]);

  const handleAnswer = (qId, type, letter) => {
    setAnswers(prev => {
      const current = prev[qId] || {};
      if (type === 'best' && current.worst === letter) return prev;
      if (type === 'worst' && current.best === letter) return prev;
      return { ...prev, [qId]: { ...current, [type]: letter } };
    });
  };

  const calculateResults = () => {
    const scores = {};
    Object.keys(sjtQuestionsData).forEach(dim => {
      const questions = sjtQuestionsData[dim];
      let totalDimScore = 0;
      questions.forEach(q => {
        const userAns = answers[q.id] || {};
        if (userAns.best === q.correctBest) totalDimScore += 2;
        if (userAns.worst === q.correctWorst) totalDimScore += 1;
      });
      // Skor per parameter (Maks 45 poin per dimensi)
      scores[paramMap[dim]] = ((totalDimScore / 45) * 100).toFixed(1);
    });
    return scores;
  };

  const handleFinish = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsFinished(true);
      setIsSaving(false);
      window.scrollTo(0, 0);
    }, 2000);
  };

  // --- VIEW: OPENING (SAMA DENGAN BIG FIVE) ---
  if (!isStarted) {
    return (
      <div className="main-wrapper">
        <div className="container animate-in">
          <div className="header-area">
            <img src={logo} alt="Logo" className="app-logo" />
            <div className="badge">Internal Assessment</div>
          </div>
          <div className="card intro-card">
            <h1 className="text-center">Decision Making Test</h1>
            <p className="description text-muted">
              Tes ini dirancang untuk mengukur cara Anda mengambil keputusan dalam situasi kerja. 
              Gunakan panduan berikut sebelum memulai:
            </p>
            <div className="instructions-list">
              <div className="ins-item"><span>✅</span> Pilih <strong>Satu Tindakan Terbaik</strong> (Best) yang paling efektif menurut Anda.</div>
              <div className="ins-item"><span>❌</span> Pilih <strong>Satu Tindakan Terburuk</strong> (Worst) yang paling dihindari.</div>
              <div className="ins-item"><span>⏳</span> Anda memiliki waktu <strong>90 menit</strong> untuk menyelesaikan 90 skenario.</div>
              <div className="ins-item"><span>💡</span> Tidak ada jawaban benar/salah secara mutlak, jawablah dengan jujur sesuai insting profesional Anda.</div>
            </div>
            
            <div className="name-section">
              <label className="input-label">Nama Lengkap</label>
              <input 
                type="text" className="name-input" placeholder="Masukkan nama..."
                value={userName} onChange={(e) => setUserName(e.target.value)}
              />
              <button className="btn-calculate" onClick={() => userName.trim() ? setIsStarted(true) : alert('Isi nama!')}>
                Mulai Test Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW: RESULTS ---
  if (isFinished) {
    const results = calculateResults();
    return (
      <div className="main-wrapper">
        <div className="container animate-in">
          <div className="card result-card">
            <div className="text-center mb-6">
              <div className="success-icon">✅</div>
              <h2>Hasil Penilaian Selesai</h2>
              <p className="text-muted">Kandidat: <strong>{userName}</strong></p>
            </div>

            <div className="screenshot-notice">
              <div className="notice-icon">📸</div>
              <div className="notice-text">
                <strong>INSTRUKSI SCREENSHOT:</strong>
                <p>Silakan screenshot halaman skor di bawah ini dan kirimkan ke tim HRD melalui WhatsApp.</p>
              </div>
            </div>

            <div className="stats-summary">
              <div className="stat-pill">Soal Dijawab: <strong>{Object.keys(answers).length} / 90</strong></div>
            </div>

            <div className="results-grid">
              {Object.entries(results).map(([code, score]) => (
                <div key={code} className="result-item">
                  <div className="result-label">
                    <span className="param-code">{code}</span>
                    <span className="param-score">{score}%</span>
                  </div>
                  <div className="progress-bg">
                    <div className="progress-bar-fill" style={{ width: `${score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-calculate outline mt-6" onClick={() => window.location.reload()}>
              Selesai & Keluar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW: QUIZ ---
  const progress = (Object.keys(answers).length / allQuestions.length) * 100;
  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="sticky-nav">
          <div className="nav-content">
            <span className="user-tag">{userName}</span>
            <span className={`timer-tag ${timeLeft < 300 ? 'urgent' : ''}`}>
              {Math.floor(timeLeft / 60)}:{ (timeLeft % 60).toString().padStart(2, '0') }
            </span>
          </div>
          <div className="progress-container"><div className="progress-fill" style={{ width: `${progress}%` }}></div></div>
        </div>

        {allQuestions.map((q, i) => (
          <div key={q.id} className="question-card shadow-sm animate-in">
            <div className="question-header">
              <span className="question-number">No. {i + 1}</span>
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
                      <p>{opt}</p>
                    </div>
                    <div className="sjt-action-btns">
                      <button className={`sjt-btn best ${isBest ? 'selected' : ''}`} onClick={() => handleAnswer(q.id, 'best', letter)}>BEST</button>
                      <button className={`sjt-btn worst ${isWorst ? 'selected' : ''}`} onClick={() => handleAnswer(q.id, 'worst', letter)}>WORST</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="submit-area"><button className="btn-calculate" onClick={handleFinish} disabled={isSaving}>{isSaving ? 'Menyimpan...' : 'Kirim Jawaban'}</button></div>
      </div>
    </div>
  );
};

export default SJTAssessment;
