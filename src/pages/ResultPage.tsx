import { useParams } from "react-router-dom";

type QrType = "fire" | "water" | "earth" | "thunder";

const ResultPage = () => {
  const { type } = useParams<{ type: QrType }>();

  return (
    <div className="result-page">
      <h1>🎉 정답! 🎉</h1>
      <p>type: {type}</p>
    </div>
  );
};

export default ResultPage;
