import { useState, useEffect } from "react";
import DEFAULT_DRAGON from "./DEFAULT_DRAGON.json";
import DragonAvatar from "../DragonAvatar/DragonAvatar";

const DragonFunctionalComponent = () => {
  const [dragon, setDragon] = useState(DEFAULT_DRAGON);

  const fetchNewDragon = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("http://localhost:3000/dragons/new");
        const json = await res.json();
        setDragon(json.dragon);
        resolve();
      } catch (err) {
        reject(err);
      }
    }).catch((err) => {
      // console.log("💥 fetch new dragon error", err);
      setDragon(DEFAULT_DRAGON);
      return err;
    });
  };

  useEffect(() => {
    fetchNewDragon();
  }, []);

  // Add: Lookup dragon function

  return (
    <div>
      <h3>Dragon</h3>
      <DragonAvatar dragon={dragon} />
      <button onClick={fetchNewDragon}>Create new dragon</button>
    </div>
  );
};

export default DragonFunctionalComponent;
