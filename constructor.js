// This is a class for all Instructor. 
class Instructor {
    name;
    designation = 'Web Course Intructor';
    team = 'Web Team';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}.`);
    }
    makeQuizQuestion(module) {
        console.log(`Make a quiz question for module ${module}.`);
    }
}

// Creating an object for instructor class. This will call the Instructor class and use its methods.'
const jhankar = new Instructor('Jhankar Mahbub', 'United States');
console.log(jhankar);
jhankar.startSupportSession('9.00 PM');
jhankar.makeQuizQuestion(12);

const amir = new Instructor('Amir Hossain', 'Dhaka');
console.log(amir);
amir.startSupportSession('10.00 PM');
amir.makeQuizQuestion(15);