import React, { Component } from 'react';
import './SearchPanel.css';
import SearchType from "./SearchType.js";
import SearchButton from "./SearchButton.js";
import SearchResults from "./SearchResults.js";
import SortType from "./SortType.js";
import BGImage from '../images/netflixBG.jpg';

class SearchPanel extends Component {
    render() {
        return (
            <div className="SearchPanel">
                <table>
                    <tr>
                        <td colSpan='2'>
                            <h1>netflixroulette</h1>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <h1>FIND YOUR MOVIE</h1>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <input/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SearchType/>
                        </td>
                        <td>
                            <SearchButton/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SearchResults/>
                        </td>
                        <td>
                            <SortType/>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}

export default SearchPanel;