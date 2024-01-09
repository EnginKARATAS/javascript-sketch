//if wanna export one
// const getName = (name) => name;
// const getSurname = (surname) => surname;
// module.exports = (name, surname) => `${getName(name)} ${getSurname(surname)}`

//many export 
const getName = (name) => name;
const getSurname = (surname) => surname;
module.exports = (name, surname) => `${getName(name)} ${getSurname(surname)}`