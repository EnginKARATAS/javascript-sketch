export const getName = (name) => name;
export const getSurname = (surname) => surname;
export default (name, surname) => `${getName(name)} ${getSurname(surname)}`