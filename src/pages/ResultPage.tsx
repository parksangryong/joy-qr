import { useParams, Navigate } from "react-router-dom";
import { getPokemonResult } from "../data/poket";
import "./ResultPage.css"; // 스타일 분리 추천

type QrType = "fire" | "water" | "earth" | "thunder";

const piecePositions = [
  { className: "piece-center" }, // 1번
  { className: "piece-top-left" }, // 2번
  { className: "piece-top-right" }, // 3번
  { className: "piece-bottom-left" }, // 4번
  { className: "piece-bottom-right" }, // 5번
];

const ResultPage = () => {
  const { type } = useParams<{ type: QrType }>();

  if (!type) {
    return <Navigate to="/" replace />;
  }

  const result = getPokemonResult(type);

  return (
    <div className={`result-page result-${type}`}>
      <h1 className="result-title">🎉 정답입니다! 🎉</h1>
      <div className="result-subtitle">퍼즐 조각이 모두 맞춰졌어요!</div>
      <div className="puzzle-container">
        {result.map((piece, idx) => (
          <img
            key={piece.id}
            src={piece.image}
            alt={`조각${piece.id}`}
            className={`puzzle-piece ${piecePositions[idx].className}`}
            style={{ zIndex: idx === 0 ? 2 : 3 }}
          />
        ))}
      </div>
      <h3 className="result-answer">
        <span className="answer-label">정답</span>:{" "}
        <span className="answer-main">CHORD</span>{" "}
        <span className="answer-desc">(화음)</span>
      </h3>
    </div>
  );
};

export default ResultPage;
