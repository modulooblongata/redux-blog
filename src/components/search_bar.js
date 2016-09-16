import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		//event handler passed into onChange property
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value })} />
			</div>
			);
	}
}

export default SearchBar;