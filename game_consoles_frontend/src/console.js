class Console {
  constructor({name, id, videogames}) {
    this.name = name
    this.id = id
    this.videogames = videogames
  }
  appendConsole() {
    let div = document.getElementById(`${this.id}`)
    let consoleList = document.createTextNode(`${this.name}`)
    let input = document.createElement('input')
    // let hiddenInput = document.createElement('input')
    // hiddenInput.type = 'hidden'
    // hiddenInput.value = this.id
    let submit = document.createElement('BUTTON')
    submit.innerHTML = "Submit"
    document.getElementById("consoles").appendChild(div)
    div.appendChild(consoleList)
    div.appendChild(input)
    div.appendChild(submit)
    if (this.videogames.length > 0){
      let showList = document.createElement('BUTTON')
      showList.innerHTML = 'Show Games'
      div.appendChild(showList)
      showList.addEventListener('click', (event) => {
        showList.disabled = true
        this.videogames.map(VG => {
          appendVideogame(VG)
        })
      })
    }
    submit.addEventListener('click', (event) => {
      event.preventDefault()
      createVideogame(input.value, this.id)
    })
  }
}
