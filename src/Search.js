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
        this.clearSearch = this.clearSearch.bind(this);
    }

    updateSearch(event) {
        this.setState({
            searchString: event.target.value
        }, () => {
            this.performSearch();
        });
    }

    performSearch() {
        const transformedSearch = this.state.searchString.trim().toLowerCase();
        this.props.updateParent(transformedSearch);
    }

    clearSearch() {
        this.setState({
            searchString: ''
        }, () => {
            this.props.updateParent('');
        });
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='search'
                    onChange={this.updateSearch} value={this.state.searchString} />
                <button onClick={this.clearSearch}>Clear Search</button>
            </div>
        );
    }
}

export default Search;
