
console.log("--------soal no 1----------")
console.log("--------jawaban no 1----------")

const fullname = {
   firstName: "William",
    lastName: "Umoh",
}
console.log(fullname)

console.log("--------soal no 2----------")  
console.log("--------jawaban no 2----------")   

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
 }

const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation, spell)


console.log("--------soal no 3----------")
console.log("--------jawaban no 3----------")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west, ...east]
console.log(combined)         