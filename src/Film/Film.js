import React, { Component } from 'react';
import Poster from './Poster.js';
import FilmName from './FilmName.js';
import FilmYear from './FilmYear.js';
import FilmGenre from './FilmGenre.js';
import posterImg from '../Posters/KillBillVol1_poster.jpg';
import './Film.css';

class Film extends Component {
    render() {
        if (this.props.filmName === 'ErrorFilm') {
            throw new Error('ErrorFilm!');
        }
        return (
            <div className="Film">
                <table>
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
                </table>
            </div>
        );
    }
}

export default Film;