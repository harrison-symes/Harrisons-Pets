document.addEventListener('DOMContentLoaded', getAllPets)

// the pets variable is an array of objects, like so:
  // [{name: 'Cino', species: 'dog', colour: 'white'}, {name: 'Percy, species: 'rat', colour: 'Brown'}, ...]

function getAllPets() {
  //We want to see a list of the names of Harrison's pets.
  //Thankfully, a renderNames function has already been created for you
  //Calling renderNames(names), where 'names' is an array of pet names (strings) will cause the names to render on the page
  var names = pets.map(pet => pet.name)

  functions.renderNames(names) //call this function with your list of names
}
