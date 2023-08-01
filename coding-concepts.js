// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2023"
// console.log(cohort.split(""))

// a) Your answer: ["E", "c", "h", "o", " ", "2", "0", "2", "3"]
// b) Verify and explain: 
// [
//   'E', 'c', 'h',
//   'o', ' ', '2',
//   '0', '2', '3'
// ]
// split("") turns a a string into and array and returns it. The returned array is split based on what is passed into the split() method. a "" passed into it means the string will be split on every index, including the space

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: undefined. A second look at line 25, I realized the return statement is missing. No return statement means the function executes but no output in this case

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ]. map() method iterates over the array and returns another array of the same length. In this particular case, the new values for the new array is doubled due to the arguments inside map()

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [ 11, 13, 15 ]. filter() iterates over an array and returns another array. However, unlike map(), it returns a new array based on specified conditions. In this case, filter() will return a new array populated by values of the old array when values are odd.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: JavaScript. myCodingSkills.languages[0] utilizes the dot notation to access the languages key in myCodingSkills object. Taking a step further, the bracket notation is used on languages because the value of language is an array and the bracket notation is needed to access an array. Index 0 of an array is the first element in the array and it is JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: "George", cohort: "Echo", year: 2023}
// b) Verify and explain: Learn { student: 'George', cohort: 'Echo', year: 2023 }
// Since the class constructor only takes in one argument, the rest of the characteristics for this class is defaulted to what is specified in the constructor. Since only a string is passed in when instantiating a new object, that string "George" becomes a part of that new instance
