import "./DragonAvatar.css";
import { Component } from "react";
import { generateDragonTraits } from "./generateDragonTraits";
import { getDragonImage } from "./getDragonImage";

class DragonAvatar extends Component {
  render() {
    const { generationId, dragonId, nickname, birthdate, traits } =
      this.props.dragon;

    if (!dragonId) return <div></div>;

    return (
      <div className="DragonAvatar">
        <p>Dragon Id: {dragonId}</p>
        <p>Nickname: {nickname}</p>
        <p>Birthdate: {birthdate}</p>
        <p>Generation Id: {generationId}</p>
        {generateDragonTraits(traits)}
        {getDragonImage(traits)}
      </div>
    );
  }
}

export default DragonAvatar;
