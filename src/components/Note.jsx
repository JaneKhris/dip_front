import { Component } from 'react'

class Note extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.setState({ notes: '12356' })
    console.log('compDidMount')
    console.log(this.state)
    this.loadNotes()

  }

  loadNotes = () => {
    console.log('fff')
    fetch('http://localhost:8000/api/files/', {
      mode: 'no-cors',
      // headers: {
      //   'Content-type': 'application/json; charset=UTF-8',
      // }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)

        // const notes123 = json.Notes;
        // console.log(notes123)

        this.setState({ notes: notes123 })
        console.log(this.state)
      })

  }






  render() {
    return (
      <>
        <div>Note</div>
        {Array.from(this.state.notes).map((note) =>
          <div key={note}>{note}</div>
        )}
      </>
    )
  }
}

export default Note