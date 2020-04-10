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
  .then(function(json) {
    console.log(json)
  });
}
