const BASE_URL = "http://localhost:3000"
const CONSOLES_URL = "http://localhost:3000/consoles"
const VIDEOGAMES_URL = "http://localhost:3000/videogames"

document.addEventListener('DOMContentLoaded', function() {
  getConsoles()
})



function getConsoles() {
  fetch(CONSOLES_URL)
  .then(function(response) {
    return response.json();
  })
  .then(consoles => {
    consoles['data'].forEach(console => {
      let newConsole = new Console(console)
      let div = document.createElement('div')
      let consoleList = document.createTextNode(`${newConsole.name.attributes
      .name}`)
      let input = document.createElement('input')
      let submit = document.createElement('BUTTON')
      submit.innerHTML = "Submit"
      document.getElementById("consoles").appendChild(div)
      div.appendChild(consoleList)
      div.appendChild(input)
      div.appendChild(submit)
      submit.addEventListener('click', function(event) {
        event.preventDefault()
        createVideogame(input.value, console.id)
      })
    })
  })

  function createVideogame(title, console_id) {
    let data = {videogame: title, console_id: console_id}
    fetch(VIDEOGAMES_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let newVideogame = new Videogame(json.data.attributes.id, json.data.attributes.title, json.data.attributes.console_id)
      console.log(newVideogame)
      appendVideogame(newVideogame)
    });
  }
}

function appendVideogame(newVideogame) {
  let videogames = document.getElementsByClassName('videogames-container')
  let li = document.createElement('li')
  let deleteButton = document.createElement('BUTTON')
  deleteButton.innerHTML = 'Delete'
  deleteButton.addEventListener('click', function(event) {
    event.preventDefault()
    deleteVideogame()
  })
  li.innerHTML = newVideogame.title
  videogames[0].append(li, deleteButton)
  console.videogames.forEach(videogame)
  // append videogame to console based on the games console id
}

function deleteVideogame(videogame_id) {
  fetch(`http://localhost:3000/videogames/delete/${videogame.id}`, {
    method: 'DELETE'
  }).then(response =>
  response.json().then(json => {
    return json;
  }))
}
