import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail'
import _ from 'lodash';

// youtube api key
const API_KEY = '...';

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//   console.log(data);
// });

// this is a component, think of it as a class.
// we are creating a class of a component
// we create a instance of this component
// thus created instance is sent to render function.
// creating instance = <App /> or <App></App>

// CLass based component
class App extends Component {

  constructor(props){
  super(props);

  this.state = {
    videos:[],
    slectedVideo: null,
    term:''
  };

  this.videoSearch(' ');

  }

  videoSearch(term){
    this.search(term);
  }

  videoSearchEnter(term){
    this.search(term);
  }

  search(term){

    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
        term: term
        });
    });

  }



render(){
  const throttle = _.debounce((term) => {this.videoSearch(term)},400);

  return (
    <div>
      <SearchBar onSearchTermChange={throttle} enterSearch={term => this.videoSearchEnter(term)}/>
      <VideoDetail video={this.state.selectedVideo} searchTerm={this.state.term}/>
      <VideoList
        videos={this.state.videos}
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
      />
  </div>
);

  // version to be used if search when press enter.
//   return (
//     <div>
//       <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
//       <VideoDetail video={this.state.selectedVideo} />
//       <VideoList
//         videos={this.state.videos}
//         onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
//       />
//   </div>
// );
}
}

// Functional component
// const App = () => {
//   return (
//     <div>
//   <SearchBar />
//   </div>
// );
// }


// Take this component's generated HTML and put it on the page(in the DOM)
// first arg = component instance to render
// second arg = target element into which the react should render this component
ReactDOM.render(<App />, document.querySelector('.container'));
