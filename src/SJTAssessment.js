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
  const [startTime, setStartTime] = useState(null);

  // Timer: 90 Menit
  const [timeLeft, setTimeLeft] = useState(5400); 
  const timerRef = useRef(null);

  // Inisial Parameter Rahasia
  const paramMap = {
    customerService: 'CSO',
    teamwork: 'TMW',
    integrity: 'INT',
    stressManagement: 'STM',
    initiative: 'INI',
    accountability: 'ACC'
  };

  const allQuestions = Object.entries(sjtQuestionsData).flatMap(([dim, scenarios]) => 
    scenarios.map(s => ({ ...s, dimension: dim }))
  );

  // --- Logic Timer ---
  useEffect(() => {
    if (isStarted && !isFinished && timeLeft > 0) {
      timerRef.current = setInterval(() => setTimeLeft(p => p - 1), 1000);
    } else if (timeLeft === 0 && isStarted) {
      handleFinish();
    }
    return () => clearInterval(timerRef.current);
  }, [isStarted, isFinished, timeLeft]);

  const handleStart = () => {
    if (!userName.trim()) return alert('Silakan masukkan nama Anda!');
    setStartTime(new Date().toLocaleTimeString());
    setIsStarted(true);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (qId, type, letter) => {
    setAnswers(prev => {
      const current = prev[qId] || {};
      // Mencegah pilihan yang sama untuk Best dan Worst
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
      // Menghitung persentase berdasarkan skor maksimal (soal * 2)
      const percentage = ((totalDimScore / (questions.length * 2)) * 100).toFixed(1);
      scores[paramMap[dim]] = percentage;
    });
    return scores;
  };

  const handleFinish = async () => {
    setIsSaving(true);
    const results = calculateResults();
    const endTimeStr = new Date().toLocaleTimeString();

    // 1. GANTI URL INI dengan URL Web App dari New Deployment Google Script Anda
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbylqATw9CO5P1shYrjuIqU3HoELNq1e5OQXsgHA8GddSHXw1-ppVfelvngfOJayyLXq/exec";

    // 2. Susun Query Parameters (Metode GET lebih stabil untuk Google Script)
    const params = new URLSearchParams({
      nama: userName,
      mulai: startTime,
      selesai: endTimeStr,
      skor_cso: results['CSO'],
      skor_tmw: results['TMW'],
      skor_int: results['INT'],
      skor_stm: results['STM'],
      skor_ini: results['INI'],
      skor_acc: results['ACC'],
      total: Object.keys(answers).length,
      status: "Selesai"
    }).toString();

    try {
      // Mengirim data menggunakan metode GET ke URL Google Script
      await fetch(`${WEB_APP_URL}?${params}`, {
        method: "GET",
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      // Tetap tampilkan hasil meskipun fetch gagal (agar kandidat bisa screenshot)
      setIsFinished(true);
      setIsSaving(false);
      window.scrollTo(0, 0);
    }
  };

  // --- VIEW 1: LAMAN AWAL (MIRIP BIG FIVE) ---
  if (!isStarted) {
    return (
      <div className="main-wrapper">
        <div className="container animate-in">
          <div className="header-area">
            <img src={logo} alt="Logo" className="app-logo" />
            <div className="badge">Oprec Stoa Gen-6</div>
          </div>
          <div className="card shadow-premium intro-card text-center">
            <h1>Decision Making Test</h1>
            <p className="description text-muted">
              Gunakan panduan operasional Stoa untuk memilih tindakan terbaik dan terburuk dalam setiap skenario.
            </p>
            <div className="instructions-box">
              <div className="ins-row"><span>✅</span> Pilih <b>Satu Tindakan Terbaik</b> (Best).</div>
              <div className="ins-row"><span>❌</span> Pilih <b>Satu Tindakan Terburuk</b> (Worst).</div>
              <div className="ins-row"><span>⏳</span> Durasi pengerjaan adalah <b>90 menit</b>.</div>
            </div>
            <div className="name-section">
              <label className="input-label">Nama Lengkap</label>
              <input 
                type="text" className="name-input-large" placeholder="Ketik nama Anda..."
                value={userName} onChange={(e) => setUserName(e.target.value)}
              />
              <button className="btn-main shadow-primary" onClick={handleStart}>
                Mulai Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 2: LAMAN HASIL (PREMIUM & NOT FLAT) ---
  if (isFinished) {
    const results = calculateResults();
    return (
      <div className="main-wrapper">
        <div className="container animate-in">
          <div className="card shadow-vibrant result-card-premium">
            <div className="success-header">
              <div className="success-icon-circle">✓</div>
              <h2>Assessment Selesai</h2>
              <p className="user-display">Kandidat: <b>{userName}</b></p>
            </div>

            <div className="screenshot-banner">
              <span className="camera-icon">📸</span>
              <div>
                <strong>INSTRUKSI SCREENSHOT:</strong>
                <p>Silakan screenshot halaman skor di bawah ini dan kirimkan ke tim Recruitment Stoa.</p>
              </div>
            </div>

            <div className="stats-pill-container">
               <span className="stat-pill">Total Soal: {Object.keys(answers).length} / 90</span>
            </div>

            <div className="results-container">
              {Object.entries(results).map(([code, score]) => (
                <div key={code} className="result-row-premium">
                  <div className="result-meta">
                    <span className="code-tag">Parameter {code}</span>
                    <span className="score-text">{score}%</span>
                  </div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: `${score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-secondary" onClick={() => window.location.reload()}>Keluar & Selesai</button>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 3: LAMAN SOAL ---
  const progress = (Object.keys(answers).length / allQuestions.length) * 100;

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="sticky-header shadow-md">
          <div className="nav-top">
            <span className="nav-user">👤 {userName}</span>
            <span className={`nav-timer ${timeLeft < 300 ? 'urgent' : ''}`}>
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </span>
          </div>
          <div className="nav-progress"><div className="nav-fill" style={{ width: `${progress}%` }}></div></div>
        </div>

        {allQuestions.map((q, i) => (
          <div key={q.id} className="card shadow-md question-card-v2 animate-in">
            <div className="q-meta">
              <span className="q-number">Skenario {i + 1}</span>
              <span className="q-tag">{paramMap[q.dimension]}</span>
            </div>
            <div className="q-scenario">{q.scenario}</div>
            
            <div className="sjt-options-v2">
              {q.options.map((opt, oIdx) => {
                const letter = String.fromCharCode(65 + oIdx);
                const isBest = answers[q.id]?.best === letter;
                const isWorst = answers[q.id]?.worst === letter;
                return (
                  <div key={letter} className={`sjt-item-v2 ${isBest ? 'is-best' : ''} ${isWorst ? 'is-worst' : ''}`}>
                    <div className="sjt-content-v2">
                      <span className="letter-box">{letter}</span>
                      <p>{opt}</p>
                    </div>
                    <div className="sjt-actions-v2">
                      <button 
                        className={`action-btn b-btn ${isBest ? 'active' : ''}`} 
                        onClick={() => handleAnswer(q.id, 'best', letter)}
                      >
                        BEST
                      </button>
                      <button 
                        className={`action-btn w-btn ${isWorst ? 'active' : ''}`} 
                        onClick={() => handleAnswer(q.id, 'worst', letter)}
                      >
                        WORST
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="submit-area">
          <button className="btn-main shadow-primary" onClick={handleFinish} disabled={isSaving}>
            {isSaving ? 'Menyimpan...' : 'Selesaikan Assessment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SJTAssessment;
