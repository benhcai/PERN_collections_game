import { useEffect, useState, useCallback, useRef } from "react";
import "./Generation.css";

const DEFAULT_GENERATION = {
  generationId: null,
  expirationTime: "",
};

const Generation = () => {
  const [gen, setGen] = useState(DEFAULT_GENERATION);
  let timer = useRef();

  const fetchGeneration = useCallback(() => {
    return new Promise((resolve, rej) => {
      fetch("http://localhost:3000/generations/current")
        .then((res) => res.json())
        .then((data) => {
          console.log("%c---fetch---", "background: lightgreen");
          console.log(
            `%cData Generation`,
            "background: pink",
            data.generation
          );
          console.log(
            "fetch res",
            new Date(data.generation.expirationTime)
          );
          console.log("fetch now", new Date());
          resolve(setGen(data.generation));
        });
    });
  }, []);

  const fetchNextGeneration = useCallback(() => {
    console.log("fng", gen);
    let exp = new Date(gen.expirationTime).getTime();
    let now = new Date().getTime();
    let delay = exp - now;
    if (isNaN(delay)) delay = 0;
    console.log(gen);
    console.log(
      `exp: ${new Date(exp)} \n`,
      `now: ${new Date(now)} \n`,
      `delay: ${delay} \n`
    );

    timer.current = setTimeout(async () => {
      await fetchGeneration();
      // On the stack, after fetch is run,
      // return if delay > 0 to prevent double execute
      if (delay > 0) return;
      console.log("doing timeout");
      fetchNextGeneration();
    }, delay + 100);
  }, [gen, fetchGeneration]);

  useEffect(() => {
    fetchNextGeneration();
    return () => clearTimeout(timer.current);
  }, [fetchNextGeneration]);

  return (
    <div>
      <h2>Generation</h2>
      <p>Current Generation: {gen.generationId}</p>
      <p>Current Generation Expiration date: {gen.expirationTime}</p>
      <button onClick={fetchGeneration}>
        Get current generaiton
      </button>
    </div>
  );
};

export default Generation;
