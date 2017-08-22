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
  }

  render() {
    // setstate is safe way(good practice) of updating state object outside constructor,
    //  because parallelly lot of operations are performed on state object in the library
    // so it lets the library know about the change through setState method.
  return (
    <div>
    <input onChange = {(event) => this.setState({term: event.target.value}) } />
    </div>
  );
  }

// alternative code to above inline function
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

}

// expose this files functions to other functions to use
// by explicitely including export
export default SearchBar;
