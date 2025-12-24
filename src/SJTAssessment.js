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
  const [finalResults, setFinalResults] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  
  // Audit & Metrics State
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [dimensionCounts, setDimensionCounts] = useState({ 
    CS: 0, TW: 0, INT: 0, SM: 0, INI: 0, ACC: 0 
  });
  const [totalAnswered, setTotalAnswered] = useState(0);

  // Timer: 90 Menit (5400 Detik)
  const [timeLeft, setTimeLeft] = useState(5400); 
  const timerRef = useRef(null);

  // Flatten questions from sjtQuestions.js
  const allQuestions = Object.entries(sjtQuestionsData).flatMap(([dim, scenarios]) => 
    scenarios.map(s => ({ ...s, dimension: dim }))
  );

  // --- Timer Logic ---
  useEffect(() => {
    if (isStarted && !isFinished && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isFinished) {
      finishTest();
    }
    return () => clearInterval(timerRef.current);
  }, [isStarted, timeLeft, isFinished]);

  // --- Helper Functions ---
  const getInisial = (name) => {
    if (!name) return "??";
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- Action Handlers ---
  const handleStart = () => {
    setStartTime(new Date().toLocaleString('id-ID'));
    setIsStarted(true);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (id, type, value) => {
    setAnswers(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: value
      }
    }));
  };

  const saveToGoogleSheet = async (name, results, counts, sTime, eTime) => {
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzidEGllgKwWDfAPvknrROkvHZ6m0NCb0snKnS4bj_WBJ6hl3Yxc2dfQH_fWraOQI2JEw/exec';
    
    const data = {
      nama: name,
      mulai: sTime,
      selesai: eTime,
      skor_cs: results.CS,
      skor_tw: results.TW,
      skor_int: results.INT,
      skor_sm: results.SM,
      skor_ini: results.INI,
      skor_acc: results.ACC,
      jawab_cs: counts.CS,
      jawab_tw: counts.TW,
      jawab_int: counts.INT,
      jawab_sm: counts.SM,
      jawab_ini: counts.INI,
      jawab_acc: counts.ACC,
      total_terjawab: (counts.CS + counts.TW + counts.INT + counts.SM + counts.INI + counts.ACC),
      status: timeLeft === 0 ? "Waktu Habis" : "Selesai",
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      return true;
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      return false;
    }
  };

  const downloadCSV = (name, results, counts, sTime, eTime) => {
    const headers = [
      "Nama", "Mulai", "Selesai", 
      "Skor_CS", "Skor_TW", "Skor_INT", "Skor_SM", "Skor_INI", "Skor_ACC",
      "Jawab_CS", "Jawab_TW", "Jawab_INT", "Jawab_SM", "Jawab_INI", "Jawab_ACC",
      "Total_Terjawab", "Status"
    ];

    const totalAnswered = counts.CS + counts.TW + counts.INT + counts.SM + counts.INI + counts.ACC;

    const row = [
      `"${name}"`, `"${sTime}"`, `"${eTime}"`,
      results.CS, results.TW, results.INT, results.SM, results.INI, results.ACC,
      counts.CS, counts.TW, counts.INT, counts.SM, counts.INI, counts.ACC,
      totalAnswered,
      `"${timeLeft === 0 ? "Waktu Habis" : "Selesai"}"`
    ].join(",");

    const csvContent = headers.join(",") + "\n" + row;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SJT_RESULT_${name.replace(/\s+/g, '_')}.csv`;
    link.click();
  };

  const finishTest = async () => {
    clearInterval(timerRef.current);
    const now = new Date().toLocaleString('id-ID');
    setEndTime(now);
    setIsSaving(true);

    const scores = { CS: 0, TW: 0, INT: 0, SM: 0, INI: 0, ACC: 0 };
    const counts = { CS: 0, TW: 0, INT: 0, SM: 0, INI: 0, ACC: 0 };
    
    allQuestions.forEach(q => {
      const ans = answers[q.id];
      const key = q.dimension === 'customerService' ? 'CS' : 
                  q.dimension === 'teamwork' ? 'TW' : 
                  q.dimension === 'integrity' ? 'INT' : 
                  q.dimension === 'stressManagement' ? 'SM' : 
                  q.dimension === 'initiative' ? 'INI' : 'ACC';
      
      if (ans && ans.best && ans.worst) {
        let score = 0;
        
        // Best answer benar = +2
        if (ans.best === q.correctBest) {
          score += 2;
        }
        
        // Worst answer benar = +1
        if (ans.worst === q.correctWorst) {
          score += 1;
        }
        
        scores[key] += score;
        counts[key] += 1;
      }
    });

    const normalized = {};
    Object.keys(scores).forEach(key => {
      // Total poin maksimal per dimensi: 15 skenario × 3 poin = 45
      normalized[key] = ((scores[key] / 45) * 100).toFixed(1);
    });

    setDimensionCounts(counts);
    setTotalAnswered(Object.keys(answers).length);
    setFinalResults(normalized);
    
    // Save to Google Sheet
    await saveToGoogleSheet(userName, normalized, counts, startTime, now);
    
    // Download CSV sebagai backup
    downloadCSV(userName, normalized, counts, startTime, now);
    
    setIsSaving(false);
    setIsFinished(true);
    window.scrollTo(0, 0);
  };

  // --- Views ---

  // 1. Welcome Screen
  if (!isStarted) {
    return (
      <div className="main-wrapper">
        <div className="welcome-card">
          <img src={logo} alt="Logo" className="app-logo" />
          <span className="event-badge">Internal Recruitment G6</span>
          <h1 className="title-gradient">Situational Judgment Test</h1>
          <div className="test-info-grid">
            <div className="info-item">📝 90 Skenario</div>
            <div className="info-item">⏱️ 90 Menit</div>
          </div>
          <div className="instruction-box">
            <p>Penting diperhatikan:</p>
            <ul>
              <li>Setiap skenario memiliki 4 pilihan respons</li>
              <li>Pilih 1 jawaban TERBAIK dan 1 jawaban TERBURUK</li>
              <li>Sistem akan menutup otomatis jika waktu habis</li>
              <li>Hasil akan tersimpan otomatis ke sistem</li>
            </ul>
          </div>
          <div className="input-group">
            <input 
              type="text" 
              className="name-input" 
              placeholder="Nama Lengkap Peserta" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <button 
            className="btn-calculate" 
            disabled={!userName.trim()} 
            onClick={handleStart}
          >
            Mulai Sesi Assessment
          </button>
        </div>
      </div>
    );
  }

  // 2. Result Screen
  if (isFinished && finalResults) {
    return (
      <div className="main-wrapper">
        <div className="welcome-card result-card">
          {isSaving ? (
            <div className="saving-indicator">
              <div className="spinner"></div>
              <p>Menyimpan hasil ke sistem...</p>
            </div>
          ) : (
            <>
              <div className="screenshot-icon">📸</div>
              <h2 className="result-title">Hasil Assessment Selesai</h2>
              <div className="result-instruction">
                Hasil telah <strong>tersimpan</strong> ke sistem. Mohon <strong>screenshot</strong> halaman ini untuk verifikasi.
              </div>

              <div className="time-audit-box">
                <div className="audit-item">Mulai: <span>{startTime}</span></div>
                <div className="audit-item">Selesai: <span>{endTime}</span></div>
                <div className="audit-item">Terjawab: <span>{totalAnswered} / 90</span></div>
              </div>

              <div className="param-breakdown-grid">
                {Object.entries(finalResults).map(([key, val]) => {
                  const labels = {
                    CS: 'Customer Service',
                    TW: 'Teamwork',
                    INT: 'Integrity',
                    SM: 'Stress Management',
                    INI: 'Initiative',
                    ACC: 'Accountability'
                  };
                  return (
                    <div key={key} className="param-card">
                      <span className="param-label">{labels[key]}</span>
                      <div className="param-score">{val}%</div>
                      <span className="param-count">Dijawab: {dimensionCounts[key]} / 15</span>
                      <div className="mini-bar">
                        <div className="mini-fill" style={{width: `${val}%`}}></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="unique-id">
                SJT-{getInisial(userName)}-{Math.floor(1000 + Math.random() * 9000)}
              </div>
              <button 
                className="btn-calculate outline" 
                onClick={() => window.location.reload()}
              >
                Selesai & Keluar
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // 3. Question Screen
  return (
    <div className="main-wrapper test-active">
      <div className="assessment-container">
        {/* Glassmorphism Header */}
        <div className="sticky-header glass-header">
          <div className="header-top">
            <h2 className="header-title">SJT Assessment - Stoa Generasi 6</h2>
          </div>
          <div className="header-info">
            <div>Peserta: <strong>{getInisial(userName)}</strong></div>
            <div className={`timer-display ${timeLeft < 600 ? 'timer-low' : ''}`}>
              ⏱️ {formatTime(timeLeft)}
            </div>
          </div>
          <div className="progress-wrapper">
            <div 
              className="progress-fill" 
              style={{ width: `${(Object.keys(answers).length / 90) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="questions-list">
          {allQuestions.map((q, i) => (
            <div key={q.id} className="question-card sjt-card">
              <div className="question-content">
                <span className="question-number">Skenario {i + 1}</span>
                <div className="scenario-text">{q.scenario}</div>
              </div>
              
              <div className="sjt-instructions">
                <div className="instruction-item best">
                  <span className="badge best-badge">TERBAIK</span>
                  Pilih 1 respons yang PALING EFEKTIF
                </div>
                <div className="instruction-item worst">
                  <span className="badge worst-badge">TERBURUK</span>
                  Pilih 1 respons yang PALING TIDAK EFEKTIF
                </div>
              </div>

              <div className="sjt-options-container">
                {q.options.map((opt, idx) => {
                  const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D
                  const isBestSelected = answers[q.id]?.best === optionLetter;
                  const isWorstSelected = answers[q.id]?.worst === optionLetter;
                  
                  return (
                    <div key={idx} className={`sjt-option-card ${isBestSelected ? 'selected-best' : ''} ${isWorstSelected ? 'selected-worst' : ''}`}>
                      <div className="option-letter">{optionLetter}</div>
                      <div className="option-text">{opt}</div>
                      <div className="option-buttons">
                        <button
                          className={`choice-btn best-btn ${isBestSelected ? 'active' : ''}`}
                          onClick={() => handleAnswer(q.id, 'best', optionLetter)}
                          disabled={isWorstSelected}
                        >
                          Terbaik
                        </button>
                        <button
                          className={`choice-btn worst-btn ${isWorstSelected ? 'active' : ''}`}
                          onClick={() => handleAnswer(q.id, 'worst', optionLetter)}
                          disabled={isBestSelected}
                        >
                          Terburuk
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="submit-area">
          <button className="btn-calculate" onClick={finishTest}>
            Selesaikan Assessment
          </button>
          <p className="test-hint">
            Pastikan setiap skenario sudah dipilih 1 jawaban TERBAIK dan 1 jawaban TERBURUK
          </p>
        </div>
      </div>
    </div>
  );
};

export default SJTAssessment;