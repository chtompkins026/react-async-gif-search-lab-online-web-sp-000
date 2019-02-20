import React, { Component } from 'react'; 
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'; 
 
class GiftListContainer extends Component {
  super(); 
  state = {
    gifs: []
  }
    
  render() {
    return (
      <div>
        <GifSearch fetchGiffys={this.fetchGiffys} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
  
  
  fetchGiffys = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) });
      });
  }
  
  componentDidMount(){
    this.fetchGiffys() 
  }
   
}
 
export default App