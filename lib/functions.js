var functions = {
  renderNames,
  renderDogs,
  renderRats,
  renderWhitePets,
  renderBrownPets
}

function renderNames (names) {
  console.log({names});
  let html = `<ul>`
  let warning = null
  if (!names) warning = "The names are not defined!"
  else if (typeof names == 'string') warning = "That's one name, I need a list of names!"
  else if (names.length == 0) warning = "There are no names in that array!"
  else if (names.find(name => typeof name == 'object')) warning = "That's an object, I need a string!"
  else {
    names.forEach(name => html += `<li>${name}</li>`)
    html += "</ul>"
  }
  if (warning) html = `<h2 class="warning">${warning}</h2>`
  document.getElementById('petList').innerHTML = html
  return !!warning
}

function renderDogs(dogs) {
  console.log({dogs});
  let html = `<ul>`
  let warning = null
  if (!dogs) warning = "The dogs are not defined!"
  else if (typeof dogs != 'object') warning = "I need an array!"
  else if (dogs.length == 0) warning = "There are no dogs in that array!"
  else if (dogs.find(dog => typeof dog != 'object')) warning = "Each dog should be an object!"
  else if (dogs.find(dog => dog.species != 'dog')) warning = "There's a Rat in this Dog list!"
  else {
    dogs.forEach(dog => html += `<li>${dog.name}</li>`)
    html += "</ul>"
  }
  if (warning) html = `<h2 class="warning">${warning}</h2>`
  document.getElementById('dogList').innerHTML = html
}

function renderRats(rats) {
  console.log({rats});
  let html = `<ul>`
  let warning = null
  if (!rats) warning = "The rats are not defined!"
  else if (typeof rats != 'object') warning = "I need an array!"
  else if (rats.length == 0) warning = "There are no rats in that array!"
  else if (rats.find(rat => typeof rat != 'object')) warning = "Each rat should be an object!"
  else if (rats.find(rat => rat.species != 'rat')) warning = "There's a Dog in this Rat list!"
  else {
    rats.forEach(rat => html += `<li>${rat.name}</li>`)
    html += "</ul>"
  }
  if (warning) html = `<h2 class="warning">${warning}</h2>`
  document.getElementById('ratList').innerHTML = html
}

function renderWhitePets (pets) {
  console.log({pets});
  let html = `<ul>`
  let warning = null
  if (!pets) warning = "The pets are not defined!"
  else if (typeof pets != 'object') warning = "I need an array!"
  else if (pets.length == 0) warning = "There are no pets in that array!"
  else if (pets.find(pet => typeof pet != 'object')) warning = "Each pet should be an object!"
  else if (pets.find(pet => pet.colour != 'White')) warning = "There's a Brown pet in this list!"
  else {
    pets.forEach(pet => html += `<li>${pet.name} (${pet.species})</li>`)
    html += "</ul>"
  }
  if (warning) html = `<h2 class="warning">${warning}</h2>`
  document.getElementById('whitePetList').innerHTML = html
}

function renderBrownPets (pets) {
  console.log({pets});
  let html = `<ul>`
  let warning = null
  if (!pets) warning = "The pets are not defined!"
  else if (typeof pets != 'object') warning = "I need an array!"
  else if (pets.length == 0) warning = "There are no pets in that array!"
  else if (pets.find(pet => typeof pet != 'object')) warning = "Each pet should be an object!"
  else if (pets.find(pet => pet.colour != 'Brown')) warning = "There's a White pet in this list!"
  else {
    pets.forEach(pet => html += `<li>${pet.name} (${pet.species})</li>`)
    html += "</ul>"
  }
  if (warning) html = `<h2 class="warning">${warning}</h2>`
  document.getElementById('brownPetList').innerHTML = html
}
