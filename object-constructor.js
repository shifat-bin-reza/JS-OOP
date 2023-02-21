// Using a constructor
function person(first_namem, last_name) {
  this.first_name = first_namem;
  this.last_name = last_name;
}

// Creating new instances of person object
let person1 = new person("Shifat", "Reza");
let person2 = new person("Rezaul", "Karim");

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);
