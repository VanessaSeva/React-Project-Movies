import React, { Component } from 'react';
import './MovieElement.css'


export default class MovieElement extends Component {

  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  }

  render() {
    return (
    
        <div onClick={ this.mouseEnter } className=" d-flex flex-row container thumbnail zoom "  >
          <img width="185" height="200" alt="film" src={ this.props.movie.img } />
          <div className="flex-fill d-flex flex-column p-3 ">
            <h5> { this.props.movie.title } </h5>
            <hr className="w-100" />
            <span className="flex-fill">{ this.props.movie.details }</span>
            <div className="d-flex flex-row justify-content-end">
            { this.props.isFavori ? (
              <button onClick={ () => { this.props.removeFavori( this.props.movie.title)}} className="btn btn-small btn-danger">Remove</button>
            ) : (
              <button onClick={ () => { this.props.addFavori( this.props.movie.title)}} className="btn btn-small btn-primary">Add</button>

            )}
            </div>
          </div>
        </div>
   );
  }

}