// in this component, user types in search bar and video list should get updated.
// user -> input in search bar -> fire API request -> update the viseo list component.

import React, {Component} from 'react';

// this is functional component
// const SearchBar = () => {
//   return <input />;
// }

// this is JS class feature that provides support for dynamic complexities.
// every react component that is class based should have a render method.
class SearchBar extends Component {

  constructor(props){
  super(props); //just like java super method to invoke parent class constructor

  this.state = { term: ''}; //holds the state object.
  //binds the react handleSubmit function with the function mentioned in our funciton.
 this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    // setstate is safe way(good practice) of updating state object outside constructor,
    //  because parallelly lot of operations are performed on state object in the library
    // so it lets the library know about the change through setState method.

      // to be used if enter key is used to trigger search request
  return (
    <div className="search-bar">
    <form onSubmit={this.handleSubmit}>
    <input className="search-text"
    value={this.state.term}
    onChange = {(event) => this.onInputChange(event.target.value)} placeholder="search" />
    </form>
    </div>
  );

// to be used to disable search on enter
  // return (
  //   <div className="search-bar">
  //   <input
  //   value={this.state.term}
  //   onChange = {(event) => this.onInputChange(event.target.value)} />
  //   </div>
  // );

  }

    // genreic submit handler invokes our custom handler by passing the search text
  handleSubmit(event) {
    // invokes callback to search for videos.
    this.props.enterSearch(this.state.term);
    // below code to prevent default behaviour of react for this event.
    event.preventDefault();
  }


  // alternative code to above inline function
  onInputChange(term) {
    this.setState({term});
    this.onSubmitSearch(term);
  }

  // custom submit handler invokes callback to the function that invokes youtube search.
  onSubmitSearch(term){
    // console.log(term);
    this.props.onSearchTermChange(term);
  }

}

// expose this files functions to other functions to use
// by explicitely including export
export default SearchBar;
