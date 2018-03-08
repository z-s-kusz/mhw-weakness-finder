import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            monsters: []
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    updateSearch(event) {
        this.setState({
            searchString: event.target.value
        });
    }

    performSearch(event) {
        event.preventDefault();
        const transformedSearch = this.state.searchString.trim().toLowerCase();
        this.props.updateParent(transformedSearch);
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='search'
                    onChange={this.updateSearch} value={this.state.searchString} />
                <button onClick={this.performSearch}>Search</button>
            </div>
        );
    }
}

export default Search;
