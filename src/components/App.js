import React from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: []};

  onSearchSubmit = async (term) => {

    // const res = await axios.get('https://api.unsplash.com/search/photos', {
    //   params: { query: term },
    //   headers: {
    //     Authorization: 'Client-ID a593a86a48f8cef07f35bb8af9c5e8b9be9a6a9063a18473dcbf6bef05add32d'
    //   }
    // })

    const res = await unsplash.get('/search/photos', {
      params: { query: term },
    })
    // .then((res) => {
    //     console.log(res.data.results)
    // })
    this.setState({ images: res.data.results});
  }

    render() {
      return (
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
        </div>
      )
    };
};

export default App;
