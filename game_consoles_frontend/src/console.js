class Console {
  constructor({name, id, videogames}) {
    this.name = name
    this.id = id
    this.videogames = videogames
  }

  append() {
    let div = document.getElementById(`${this.id}`)
    let consoleList = document.createTextNode(`${this.name}`)
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
      createVideogame(input.value, this.id)
    })
  }
}
