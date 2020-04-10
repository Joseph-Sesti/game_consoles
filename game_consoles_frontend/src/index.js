const BASE_URL = "http://localhost:3000/consoles"

const submit = document.getElementById('submit')

fetch(BASE_URL)
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json)
});
