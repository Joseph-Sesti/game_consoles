class Videogame {
  constructor(id, title, console_id) {
    this.id = id
    this.title = title
    this.console_id = console_id
  }

  // append() {
  //   let console = document.getElementById(`${this.console_id}`)
  //   let li = document.createElement('li')
  //   li.setAttribute('data-id', this.id)
  //   li.setAttribute('style', "list-style-type:none")
  //   let deleteButton = document.createElement('BUTTON')
  //   deleteButton.innerHTML = 'Delete'
  //   deleteButton.addEventListener('click', function(event) {
  //     event.preventDefault()
  //     this.delete()
  //   })
  //   li.innerHTML = this.title
  //   li.appendChild(deleteButton)
  //   console.appendChild(li)
  // }
  //
  // delete() {
  //   fetch(`${VIDEOGAMES_URL}/${this.id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({'id': this.id})
  //   })
  //   const title = document.querySelector(`[data-id="${this.id}"]`)
  //   title.remove()
  // }
}
