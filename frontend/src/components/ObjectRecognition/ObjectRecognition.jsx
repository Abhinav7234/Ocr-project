
import { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

export default function ObjectRecognition({ imageFile }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const recognizeObject = async () => {
    if (!imageFile) return;

    setLoading(true);
    setResult(null);

    try {
      const model = await mobilenet.load();

      const image = new Image();
      image.src = URL.createObjectURL(imageFile);

      image.onload = async () => {
        const predictions = await model.classify(image);

        if (predictions.length > 0) {
          setResult({
            label: predictions[0].className,
            confidence: predictions[0].probability,
          });
        }

        URL.revokeObjectURL(image.src);
        setLoading(false);
      };
    } catch (error) {
      console.error("Object recognition error:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Object Recognition</h2>

      <button
        onClick={recognizeObject}
        disabled={!imageFile || loading}
      >
        {loading ? "Recognizing..." : "Recognize Object"}
      </button>

      {result && (
        <div>
          <h3>Result</h3>

          <p>
            <strong>Label:</strong> {result.label}
          </p>

          <p>
            <strong>Confidence:</strong>{" "}
            {(result.confidence * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
}