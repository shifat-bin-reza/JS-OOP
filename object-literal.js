// inside literal object we can use variables, array, functions (which are called method) and access them by using the object name.

let person = {
  first_name: "Shifat",
  last_name: "Reza",

  // method
  getFunction: function () {
    return (
      "The name of the person is " + person.first_name + " " + person.last_name
    );
  },

  phone_number: {
    mobile: "123456",
    landline: "6789",
  },
};

console.log(person.getFunction());
console.log(person.phone_number.landline);
