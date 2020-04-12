const BASE_URL = "http://localhost:3000"
const CONSOLES_URL = "http://localhost:3000/consoles"
const VIDEOGAMES_URL = "http://localhost:3000/videogames"
const submit = document.getElementById('submit')

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
      let div = document.createElement('div')
      let consoleList = document.createTextNode(`${console.attributes.name}`)
      let input = document.createElement('input')
      document.getElementById("consoles").appendChild(div)
      div.appendChild(consoleList)
      div.appendChild(input)
    })
  })
}
