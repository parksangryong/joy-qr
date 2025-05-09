import { useParams } from "react-router-dom";

type QrType = "fire" | "water" | "earth" | "thunder";

const ResultPage = () => {
  const { type, keyword } = useParams<{ type: QrType; keyword: string }>();

  return (
    <div>
      ResultPage: {type} {keyword}
    </div>
  );
};

export default ResultPage;
