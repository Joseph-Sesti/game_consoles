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
    let data = {title: title, console_id: console_id}
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
      let newVideogame = new Videogame(title, console_id)
      appendVideogame(newVideogame)
    });
  }
}

function appendVideogame(newVideogame) {
  let videogames = document.getElementsByClassName('videogames-container')
  let li = document.createElement('li')
  li.setAttribute('data-id', newVideogame.id)
  li.innerHTML = newVideogame.title
  videogames[0].append(li)
}

//user performs an action on the DOM
//this triggers an eventlistener
//which triggers a function which calls fetch
//fetch talks to a ruby controller action depending on the route passed to it,
//and since you configured it to do so, renders json
//that is received back on the front in your JS as a promise, or, a response from
//your fetch
//you handle that response with a couple.then's
//in the second then, or in a function that you call there, a new JS model object
//is created by invoking the constructor function that you wrote (new User(userJsonData, for example.)
