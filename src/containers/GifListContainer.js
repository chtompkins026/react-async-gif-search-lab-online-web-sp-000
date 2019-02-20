import React, { Component } from 'react'
 
class GiftListContainer extends Component {
 
  state = {
    gifs: []
  }
 
  render() {
    return (
      <div>
        {this.state.gifs.map(gif => person.name)}
      </div>
    )
  }
 
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
}
 
export default App