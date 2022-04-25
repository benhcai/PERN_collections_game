export const generateDragonTraits = (traits) => {
  console.log(traits);
  if (!traits) return;
  const traitsMarkup = traits.map((trait, index) => {
    const traitTypeFormatted =
      trait.traitType.slice(0, 1).toUpperCase() +
      trait.traitType.slice(1);
    return (
      <div key={index}>
        <div>
          {traitTypeFormatted}: {trait.traitValue}
        </div>
      </div>
    );
  });
  return traitsMarkup;
};
