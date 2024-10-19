//bai 1
console.log("Bai 1: ")
var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
]

// Find the first person off the people array is teenager (age >=10 and age <=20)
let firstPerson = people.find(person => person.age >= 10 && person.age <= 20);

console.log("First person off the people array is teenager (age >=10 and age <=20): ", firstPerson);

//Find the all person of the people array is teenager (age >=10 and age <=20)
let allPerson = people.filter(person => person.age >= 10 && person.age <= 20);

console.log("all person of the people array is teenager (age >=10 and age <=20): ", allPerson);

// Check if every person in the people array is a teenager (age >= 10 and age <= 20)
let everyTeenager = people.every(person => person.age >= 10 && person.age <= 20);
console.log("Every person is a teenager:", everyTeenager);

// Check if any person in the people array is a teenager (age >= 10 and age <= 20)
let anyTeenager = people.some(person => person.age >= 10 && person.age <= 20);
console.log("Any person is a teenager:", anyTeenager);

console.log();
//bai 2
console.log("Bai 2: ")

var array = [1, 2, 3, 4]
//Applies a function passed as the first parameter against an accumulator and each element in the array (from left to right), 
//thus reducing it to a single value. The initial value of the accumulator should be provided as the second parameter of the reduce function.
let result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(result);
//Implementation of very simple functions (like the aforementioned sum or product) requires writing a lot of boilerplate.
// Is there any remedy for that ? just try arrow functions!
const product = array => array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product(array));

//bai 3
console.log("bai 3")
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
    name: "Costas",
    address: {
        street: "Lalaland 12"
    }
};

//Print the name of each company using forEach
companies.forEach(function (company, index) {
    console.log("Name of each company", company.name);
});

// Print the name of each company that started after 1987
companies.forEach(company => {
    if (company.start > 1987) {
        console.log("Company that started after 1987: ", company.name);
    }
});

// Sort the companies based on their end date in ascending order
const sortedCompanies = companies.sort((a, b) => a.end - b.end);

sortedCompanies.forEach(company => {
    console.log(company.name, company.end);
});

//	Sort the ages array in descending order
const sortedAge = ages.sort((a, b) => b - a);

sortedAge.forEach(age => {
    console.log(age);
});

//Print the sum if you add all the ages using reduce
const age = array => ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(age(ages));


// Make a new object that has the properties of name and category same as the companies [0] and a method print that prints out the name, 
//use object restructuring and ES6 JS
const { name, category } = companies[0];

const newObject = {
    name,
    category,
    print() {
        console.log(`Name: ${this.name}`);
    }
};

newObject.print();

//Create a function that takes an unknown number of arguments that are numbers and return their sum;
const sumNumbers = (...numbers) => {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
console.log(sumNumbers(1, 2, 3))


//	Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array, if the argument is an array, 
//it should add its values to the array that will be returned by the function
const addValuesToArray = (...args) => {
    let resultArray = [];

    args.forEach(arg => {
        if (Array.isArray(arg)) {
            resultArray = resultArray.concat(arg);
        } else {
            resultArray.push(arg);
        }
    });

    return resultArray;
};

console.log(addValuesToArray(1, "two", [3, 4]));

//•	Destructuring the property street in a variable named street from the object person

const { address: { street } } = person;

console.log(street);

//•	Write a function that every time you call it, it returns a number that increments starting from 0
const numberGenerator = () => {
    let counter = 0;

    return () => {
        return counter++;
    };
};

const getNextNumber = numberGenerator();

console.log(getNextNumber());
console.log(getNextNumber());



//bai 5
console.log("bai 5")
const generateRandomNumber = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber > 5) {
        resolve(randomNumber);
    } else {
        reject(new Error('Error'));
    }
});

// Usage of the promise
generateRandomNumber
    .then(number => {
        console.log(`Random number larger than 5: ${number}`);
    })
    .catch(error => {
        console.error(error.message);
    });


//bai 4

class Shape {
    constructor(color) {
        this.color = color;
    }

    getArea() {
        throw new Error('Phương thức getArea() phải được ghi đè trong lớp con.');
    }

    toString() {
        return `Color: ${this.color}`;
    }
}

class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color);
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    toString() {
        return `Rectangle - Color: ${this.color}, Length: ${this.length}, Width: ${this.width}, Area: ${this.getArea()}`;
    }
}

class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }

    toString() {
        return `Triangle - Color: ${this.color}, Base: ${this.base}, Height: ${this.height}, Area: ${this.getArea()}`;
    }
}

const rectangle = new Rectangle('blue', 5, 10);
console.log(rectangle.toString());

const triangle = new Triangle('red', 4, 8);
console.log(triangle.toString());








