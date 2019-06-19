import React from 'react';

const Movie = ({ movie }) => {
 return (
  <div>
   <ul>
    <li>{movie.Title}</li>
    <li>{movie.Year}</li>
    <li>{movie.imdbRating}</li>
   </ul>
  </div>
 );
};

export default Movie;