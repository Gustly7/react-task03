import React from 'react';
import './SearchPanel.css';
import SearchType from './SearchType';
import SearchHeader from './SearchHeader';
import SearchButton from './SearchButton';
import SearchResults from './SearchResults';
import SortType from './SortType';
import BGImage from '../images/netflixBG.jpg';

var SearchPanelStyle = {
    backgroundImage: "url(" + BGImage + ")"
};

class SearchPanel extends React.Component {

    searchChange(event) {
        sessionStorage.searchText = event.target.value;
    }

    render() {
        return (
            <div className='SearchPanel' style={ SearchPanelStyle } >
                <table>
                    <tbody>
                        <tr>
                            <td colSpan='2'>
                                <SearchHeader/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <span className='white-font'>FIND YOUR MOVIE</span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <input className="form-control" id="inputSearch" type="text" onChange={this.searchChange} />
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
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SearchPanel;