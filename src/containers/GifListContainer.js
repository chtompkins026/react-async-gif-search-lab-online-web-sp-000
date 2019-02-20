import React, { Component } from 'react'; 
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'; 
 
class GiftListContainer extends Component {
  super(); 
  this.state = {
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