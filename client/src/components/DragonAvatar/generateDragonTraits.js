export const generateDragonTraits = (traits) => {
  console.log(traits);
  if (!traits) return;
  const traitsMarkup = traits.map((trait, index) => {
    return (
      <div key={index}>
        <div>
          Trait - {trait.traitType}: {trait.traitValue}
        </div>
      </div>
    );
  });
  return traitsMarkup;
};
