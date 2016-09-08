import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDA7N02euJvjyIA3WOJfOaL0859N4RMYEI';

//Create a new component that shoud produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated html and 
// put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));