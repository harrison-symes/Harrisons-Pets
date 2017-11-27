document.addEventListener('DOMContentLoaded', getWhitePets)

function getWhitePets() {
  console.log("getting brown pets");
  var whitePets = pets.filter(pet => pet.colour == 'White')
  functions.renderWhitePets(whitePets)
}
