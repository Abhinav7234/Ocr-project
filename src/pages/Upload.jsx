import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [fileName, setFileName] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleAnalyze = () => {
    navigate("/results/INS-1001");
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Upload Product Image</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {fileName && <p>Selected: {fileName}</p>}
      <br /><br />
      <button onClick={handleAnalyze} disabled={!fileName}>
        Analyze
      </button>
    </div>
  );
}
