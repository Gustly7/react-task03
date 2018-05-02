import React, { Component } from 'react';

class SearchType extends Component {
    render() {
        return (
            <div className="SearchType">
                Search by
                <label><input name="searchType" type="radio" value="title"/>Title</label>
                <label><input name="searchType" type="radio" value="genre"/>Genre</label>
            </div>
        );
    }
}

export default SearchType;