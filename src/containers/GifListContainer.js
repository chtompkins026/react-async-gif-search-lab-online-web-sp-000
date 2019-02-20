import React, { Component } from 'react'; 
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'; 
 
class GiftListContainer extends Component {
  super(); 
  state = {
    gifs: []
  }
  
  componentDidMount(){
    this.fetchGiffys() 
  }
  
  fetchGiffys = (query = 'dogs') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`);
  };
  
  
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