import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  state = { images: [] };
   onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID XrXq6SzAtXBPiAur2KmGXXImR6vGlCjF6plHvNr1v_w'
      }
    });
    this.setState({ images: response.data.results });

  }
  render() {
    return (
      <div >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;
