document.addEventListener('DOMContentLoaded', rats)

function rats() {
  functions.renderRats(pets.filter(pet => pet.species == "rat"))
}
