import { useParams, Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (type === "fail") {
      import("../assets/cat1.json").then((data) => {
        setAnimationData(data.default);
      });
    }
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

  return (
    <div className="qr-page">
      <img
        src={`../assets/image/${type} ${id}.png`}
        alt={`${type} ${id}`}
        className="qr-image"
      />
      <h1 className="qr-title">
        {type} : {id}
      </h1>
    </div>
  );
};

export default Qrpage;
