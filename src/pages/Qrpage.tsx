import { useParams, Navigate, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { getPokemonByType } from "../data/poket";
import "./Qrpage.css";

type QrType = "fire" | "water" | "earth" | "thunder" | "fail";
const validTypes: QrType[] = ["fire", "water", "earth", "thunder", "fail"];

interface AnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: never[];
}

const Qrpage = () => {
  const { type, id } = useParams<{ type: QrType; id: string }>();
  const [animationData, setAnimationData] = useState<AnimationData | null>(
    null
  );
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    if (type === "fail" || id) {
      import("../assets/cat1.json").then((data) => {
        setAnimationData(data.default);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  if (!type || !validTypes.includes(type as QrType)) {
    return <Navigate to="/" replace />;
  }

  if (type === "fail") {
    return (
      <div className="fail-page">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 200, height: 200 }}
          />
        )}
        <h1 className="fail-title">- 꽝 -</h1>
      </div>
    );
  }

  const pokemonId = parseInt(id || "0");
  const poketObject = getPokemonByType(type, pokemonId);

  const handleCheck = () => {
    if (input.trim().toUpperCase() === "CHORD") {
      setIsWrong(false);
      navigate(`/result/${type}/chord`);
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 500);
    }
  };

  return (
    <div className={`qr-page qr-${type}`}>
      <img src={poketObject.image} alt={`${type} ${id}`} className="qr-image" />
      <h1 className="qr-title">키워드: {poketObject.word}</h1>
      <div className="qr-input-container">
        <label htmlFor="answer">코드 입력</label>
        <input
          type="text"
          id="answer"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`qr-input${isWrong ? " shake error" : ""}`}
          placeholder="정답을 입력하세요"
        />
        <button className="qr-btn" onClick={handleCheck}>
          코드 확인
        </button>
      </div>
    </div>
  );
};

export default Qrpage;
