import React from 'react';
import ReactDOM from 'react-dom';

// this is a component, think of it as a class.
// we are creating a class of a component
// we create a instance of this component
// thus created instance is sent to render function.
// creating instance = <App /> or <App></App>
const App = function(){
  return <div>Hola hermano !! </div>;
}


// Take this component's generated HTML and put it on the page(in the DOM)
// first arg = component instance to render
// second arg = target element into which the react should render this component
ReactDOM.render(<App />, document.querySelector('.container'));
