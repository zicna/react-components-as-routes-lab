import React from 'react';
import { movies } from '../data';



const Movies = () => {
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
          <div key={index}>
            {movie.title}
            {movie.time}
            <ul>
              {movie.genres.map(genre=>{
                return (
                  <li>{genre}</li>
                )
              })}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default Movies;
