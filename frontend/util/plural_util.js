const Pluralizer = (plural, singular) => quantity => (quantity === 1) ? singular : plural;

export default Pluralizer;
