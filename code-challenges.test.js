// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

//input: {number: 9}
//output: "9 is divisible by three"

//input: {number: 10}
//output: "10 is not divisible by three"

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleBy3", () => {
    it("Returns if the number inside object is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        const object2 = { number: 0 }
        const object3 = { number: -7 }
        expect(divisibleBy3(object1)).toEqual("15 is divisible by three")
        expect(divisibleBy3(object2)).toEqual("0 is divisible by three")
        expect(divisibleBy3(object3)).toEqual("-7 is not divisible by three")
    })
})
// ReferenceError: divisibleBy3 is not defined

// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:
// declare a function divisibleBy3 with 1 obj parameter
// if obj.key % 3 === 0
    //return value is divisible by 3
// else
    //return value is not divisible by 3

const divisibleBy3 = (obj) => {
    if (obj.number % 3 === 0) { //if obj is even
        return `${obj.number} is divisible by three`
    } else {
        return `${obj.number} is not divisible by three`
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//input: ["zero", "one", "two", "three"]
//output: ["Zero", "One", "Two", "Three"]

// a) Create a test with expect statements for each of the variables provided.

describe("capMe", () => {
    it("Returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        expect(capMe(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capMe(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// ReferenceError: capMe is not defined

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:
// declare a function name capMe with 1 arr parameter
// declare a variable and assign empty array
// iterate over arr with for loops
// declare a variable and set equal to:
    //concatenate arr value string.charAt(0).toUpperCase with the rest of the string
// push variable into empty array
// return array


const capMe = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        newArr.push(word)
    }
    return newArr
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

//input: "hello"
//output: "e"

// a) Create a test with expect statements for each of the variables provided.

describe("vowelChecker", () => {
    it("Logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        const vowelTester2 = "academy"
        const vowelTester3 = "challenges"
        expect(vowelChecker(vowelTester1)).toEqual(1)
        expect(vowelChecker(vowelTester2)).toEqual(0)
        expect(vowelChecker(vowelTester3)).toEqual(2)
    })
})
// ReferenceError: vowelChecker is not defined

// Expected output: 1
// Expected output: 0
// Expected output: 2

// b) Create the function that makes the test pass.

// Pseudo code:
// declare function vowelChecker with 1 string parameter
// iterate over string with for loop
// reassign passed in str to all lowercase with toLowerCase 
// if charAt(i) === vowels
    // return index of vowel

const vowelChecker = (str) => {
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u"){
            return i
        }
    }
}
