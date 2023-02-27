class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`);
    }
}

class Instructor extends TeamMember {
    designation = 'Web Course Intructor';
    team = 'Web Team';
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}.`);
    }
    makeQuizQuestion(module) {
        console.log(`Make a quiz question for module ${module}.`);
    }
} 

class Developer extends TeamMember {
    designation = 'Developer';
    team = 'Developer Team';
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`);
    }
    releaseVersion(version) {
        console.log(`Please release the version ${version}.`);
    }
}

class Jobplacement extends TeamMember {
    designation = 'Job Placement';
    team = 'Job Placement Team';
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    provideResume(resume) {
        console.log(`Please prepare the ${resume}.`);
    }
    makeQuizQuestion(module) {
        console.log(`Make a quiz question for module ${module}.`);
    }
}

const shifat = new Developer('Md. Shifat Bin Reza', 'Dhaka, Bangladesh', 'React');
console.log(shifat);
shifat.provideFeedback();

const jhankar = new Instructor('Jhankar Mahbub', 'New York, USA', 'Web Instructor');
console.log(jhankar);
jhankar.startSupportSession('9.00 PM');
jhankar.makeQuizQuestion(10);
jhankar.provideFeedback();