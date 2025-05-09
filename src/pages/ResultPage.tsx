import { useParams } from "react-router-dom";

type QrType = "fire" | "water" | "earth" | "thunder";

const ResultPage = () => {
  const { type } = useParams<{ type: QrType }>();

  return <div>ResultPage: {type}</div>;
};

export default ResultPage;
