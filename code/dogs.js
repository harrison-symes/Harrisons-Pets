document.addEventListener('DOMContentLoaded', getDogs)

function getDogs() {
  functions.renderDogs(pets.filter(pet => pet.species == "dog"))
}
