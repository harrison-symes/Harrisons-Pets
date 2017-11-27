document.addEventListener('DOMContentLoaded', getBrownPets)

function getBrownPets() {
  console.log("getting brown pets");
  var brownPets = pets.filter(pet => pet.colour == 'Brown')

  functions.renderBrownPets(brownPets)
}
