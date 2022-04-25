import { propertyMap } from "./propertyMap";

export const getDragonImage = (traits) => {
  const dragonPropertyMap = {};
  traits.forEach((trait) => {
    const { traitType, traitValue } = trait;
    dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
  });
  // console.log("dpm", dragonPropertyMap);
  const imageSize = { width: 220, height: 220 };
  return (
    <div className="DragonAvatar-image-wrapper">
      <div
        className="DragonAvatar-image-background"
        style={{
          ...imageSize,
          backgroundColor: dragonPropertyMap.color,
        }}
      ></div>
      <img
        className="DragonAvatar-image-pattern"
        src={dragonPropertyMap.pattern}
        alt="Dragon Pattern"
        style={{ ...imageSize }}
      />
      <img
        className="DragonAvatar-image-build"
        src={dragonPropertyMap.build}
        alt="Dragon Build"
        style={{ ...imageSize }}
      />
    </div>
  );
};
