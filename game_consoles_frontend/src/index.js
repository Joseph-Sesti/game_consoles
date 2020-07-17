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
    consoles['data'].forEach(consol => {
      let newConsole = new Console(consol.attributes)
      let div = document.getElementById(`${newConsole.id}`)
      let consoleList = document.createTextNode(`${newConsole.name}`)
      let input = document.createElement('input')
      let hiddenInput = document.createElement('input')
      hiddenInput.type = 'hidden'
      let submit = document.createElement('BUTTON')
      submit.innerHTML = "Submit"
      document.getElementById("consoles").appendChild(div)
      div.appendChild(consoleList)
      div.appendChild(input)
      div.appendChild(submit)
      submit.addEventListener('click', function(event) {
        event.preventDefault()
        console.log(event.target)
        createVideogame(input.value, consol.id)
      })
    })
  })
  function appendConsoles() {

  }
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
      console.log('response', json)
      let newVideogame = new Videogame(json.data.attributes.id, json.data.attributes.title, json.data.attributes.console_id)
      console.log(newVideogame)
      appendVideogame(newVideogame)
    });
  }
}

function appendVideogame(newVideogame) {
  let console = document.getElementById(`${newVideogame.console_id}`)
  let li = document.createElement('li')
  li.setAttribute('data-id', newVideogame.id)
  li.setAttribute('style', "list-style-type:none")
  let deleteButton = document.createElement('BUTTON')
  deleteButton.innerHTML = 'Delete'
  deleteButton.addEventListener('click', function(event) {
    event.preventDefault()
    deleteVideogame(newVideogame)
  })
  li.innerHTML = newVideogame.title
  li.appendChild(deleteButton)
  console.appendChild(li)
  Array.from(consoles.videogames).forEach(newVideogame)
    console.append(videogame)
}

function deleteVideogame(videogame) {
  fetch(`${VIDEOGAMES_URL}/${videogame.id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({'id': videogame.id})
  })
  const title = document.querySelector(`[data-id="${videogame.id}"]`)
  title.remove()
}
