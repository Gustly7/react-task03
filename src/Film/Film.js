import React, { Component } from 'react';
import Poster from './Poster';
import FilmName from './FilmName';
import FilmYear from './FilmYear';
import FilmGenre from './FilmGenre';
import posterImg from '../Posters/KillBillVol1_poster.jpg';
import './Film.css';

class Film extends Component {
    render() {
        if (sessionStorage.searchText === '') {
            throw new Error('Пустой поиск!');
        }
        return (
            <div className="Film">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan='2'>
                                <Poster link={posterImg}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FilmName filmName={this.props.filmName}/>
                            </td>
                            <td>
                                <FilmYear filmYear={this.props.filmYear}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <FilmGenre filmGenre={this.props.filmGenre}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Film;