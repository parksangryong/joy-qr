import { useState, useEffect } from "react";
import { quizData, teams } from "../data/quiz";
import "./Quiz.css";

interface TeamScore {
  [key: string]: number;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [teamScores, setTeamScores] = useState<TeamScore>({});
  const [showResults, setShowResults] = useState(false);

  // 팀 점수 초기화
  useEffect(() => {
    const initialScores = teams.reduce(
      (acc, team) => ({ ...acc, [team]: 0 }),
      {}
    );
    setTeamScores(initialScores);
  }, []);

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const currentQuiz = quizData[currentQuestion];
    if (selectedAnswer === currentQuiz.answer) {
      setTeamScores((prev) => ({
        ...prev,
        [currentQuiz.team]: (prev[currentQuiz.team] || 0) + currentQuiz.points,
      }));
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const currentQuiz = quizData[currentQuestion];

  if (showResults) {
    const sortedTeams = Object.entries(teamScores).sort(
      ([, a], [, b]) => b - a
    );

    return (
      <div className="quiz-container">
        <h2 className="results-title">퀴즈 결과</h2>
        <div className="results-list">
          {sortedTeams.map(([team, score], index) => (
            <div key={team} className="result-item">
              <span className="result-rank">{index + 1}위</span>
              <span className="result-team">{team}</span>
              <span className="result-score">{score}점</span>
            </div>
          ))}
        </div>
        <button
          className="quiz-next"
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswer(null);
            setShowExplanation(false);
            setShowResults(false);
            const initialScores = teams.reduce(
              (acc, team) => ({ ...acc, [team]: 0 }),
              {}
            );
            setTeamScores(initialScores);
          }}
        >
          다시 시작하기
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        문제 {currentQuestion + 1} / {quizData.length}
      </div>

      <div className="quiz-header">
        <div className="quiz-question">{currentQuiz.question}</div>
        <div className="quiz-info">
          <div className="quiz-team">{currentQuiz.team}의 문제</div>
          <div className="quiz-points">{currentQuiz.points}점</div>
        </div>
      </div>

      <div className="quiz-options">
        {currentQuiz.options.map((option, index) => (
          <button
            key={index}
            className={`quiz-option ${
              selectedAnswer === index ? "selected" : ""
            } ${
              showExplanation
                ? index === currentQuiz.answer
                  ? "correct"
                  : selectedAnswer === index
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => handleAnswerSelect(index)}
            disabled={showExplanation}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer !== null && !showExplanation && (
        <button className="quiz-next" onClick={() => setShowExplanation(true)}>
          정답 확인하기
        </button>
      )}

      {showExplanation && (
        <div className="quiz-explanation">
          <p>{currentQuiz.explanation}</p>
          <button className="quiz-next" onClick={handleNext}>
            {currentQuestion < quizData.length - 1 ? "다음 문제" : "결과 보기"}
          </button>
        </div>
      )}

      <div className="team-scores">
        {teams.map((team) => (
          <div key={team} className="team-score">
            <span className="team-name">{team}</span>
            <span className="team-points">{teamScores[team] || 0}점</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
