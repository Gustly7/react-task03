import React, { Component } from 'react';

class SortType extends Component {
    render() {
        return (
            <div className="SortType">
                Sort by
                <label><input name="sortType" type="radio" value="release"/>release date</label>
                <label><input name="sortType" type="radio" value="rating"/>rating</label>
            </div>
        );
    }
}

export default SortType;