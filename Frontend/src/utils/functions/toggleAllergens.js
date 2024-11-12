export const toggleAllergens = (e, allergen, allergensSelected) => {
  e.target.checked
    ? allergensSelected.push(allergen)
    : allergensSelected.splice(allergensSelected.indexOf(allergen), 1);
};
