import { useEffect, useState } from "react";
import "./Generation.css";

const Generation = () => {
  const [generation, setGeneration] = useState(undefined);

  useEffect(() => fetchGeneration(), []);

  const fetchGeneration = async () => {
    console.log("fetch Generation fn...");
    const res = await fetch(
      "http://localhost:3000/generations/current",
      {
        method: "GET",
        mode: "cors",
      }
    );
    const data = await res.json();
    console.log(data.generation);
    setGeneration(data.generation);
  };

  return (
    <div>
      <h2>Generation</h2>
      <p>Current Generation: {generation?.generationId}</p>
      <p>
        Current Generation Expiration date: {generation?.expiration}
      </p>
      <button onClick={fetchGeneration}>
        Get current generaiton
      </button>
    </div>
  );
};

export default Generation;
