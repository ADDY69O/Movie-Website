import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/context';
import useFetch from "../Components/useFetch";
const SearchMovies = () => {
  const {id} = useParams();
  const { loading, movie, isError } = useFetch(`&i=${id}`);
  if (loading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className='movie-section'>
       <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default SearchMovies