# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a placeholder, usually for a function, for a block of code to act on. An argument is an exact thing that is passed in inplace of the parameter to be executed upon

Researched answer: A parameter is a variable that is used in the declaration of the function and is a placeholder for the values that will be input to the function when called. An argument is the actual value that takes the place of the parameter when called on in a function

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: Predefined parameters for .map() are value, index, and array. The only one required is value. Index and array are optional

Researched answer: .map() is a higher order function with 3 built-in parameters. They are current value, the index, and the array .map() is called on. It's parameter's names are arbitrary but the order will always be the same. The .map() have to take atleast one argument and that argument is in place of the value parameter.

3. What is the difference between map and filter?

Your answer: .map() will always return a new array of the same length. .filter() will return a new array of with length less than or equal to the original array based on some conditions

Researched answer: .map() method iterates through an array and returns a new array of the same length. This new array will contain updated values based on what is applied to it in the code block. .filter() also iterates through an array and will return a new array with only the values that satisfy the stated condition. Filter needs an evaluation and it can be anything that will return a boolean. Any values that are true will be included in the new subset array while false values are excluded.

1. What is iteration?

Your answer: Iteration is the process of redoing an action over and over until a condition is met

Researched answer: Iteration refers to the process of repeating a sequence of instructions until a specific condition is met. 

1. What is the difference between a function and a method?

Your answer: A function is a block of reusuable code. A method is a function but exists in an object. When calling a method, its usually performed on an object.

Researched answer: A function is a self-contained block of reusable code that is defined outside of classes or objects. When a function belongs to an object or a class, it is called a method and is a property of that object or class.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I do not know.

Researched answer: Hoisting is the process that moves a declaration of functions, variables, or classes to the top of their scope in order to execute the rest of the code. For example, being able to use a variable's value in its scope before the line it is declared.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: A "function" in React. A component is also reusable and follows PascalCasing

2. Spread operator: ... allows for any iterable data structures like array or string to be expanded where arguments or elemtes are expected.

3. React state: Built-in object in React and is a special variable that stores data to determine how the component will behave

4. React props: Props, short for properties, used to pass information from one component to another.

5. DOM events: A signal when something occured. This is usually triggered by an interaction from the user. 
