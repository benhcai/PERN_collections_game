import "./DragonAvatar.css";
import { Component } from "react";
import { generateDragonTraits } from "./generateDragonTraits";
import { getDragonImage } from "./getDragonImage";

class DragonAvatar extends Component {
  render() {
    const { generationId, dragonId, nickname, birthdate, traits } =
      this.props.dragon;

    if (!dragonId) return <div></div>;

    const birthDateFormatted =
      birthdate.slice(0, 10) + " " + birthdate.slice(11, 19);
    return (
      <div className="DragonAvatar">
        {getDragonImage(traits)}
        <div className="DragonAvatar--stats">
          <div className="stats-group1">
            {generateDragonTraits(traits)}
          </div>
          <div className="stats-group2">
            <p>Dragon Id: {dragonId}</p>
            {/* <p>Nickname: {nickname}</p> */}
            <p>Birthdate: {birthDateFormatted}</p>
            <p>Generation Id: {generationId}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DragonAvatar;
