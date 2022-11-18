    import React from 'react'
    import { useGlobalContext } from '../Context/context';
    import {NavLink} from "react-router-dom";
    const Movies = () => {
      //useParams hook for getting the id 
      const {movie,loading}=useGlobalContext();

      if(loading){
       return(
       <div >
          <div className='loading'>Loading...</div>
        </div>
       );
      }

      return (
        <div>


    <section className='container movie-page'>
      <div className='grid grid-4-col'>
    {movie 
    ? movie.map((CurrMovie)=>{
      const {Title,Poster,Year,imdbID}=CurrMovie;
    
      return(

      <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className='card'>
            <div className='card-info'>
              
              <h2>{Title.length>15?Title.slice(0,19)+"...":Title}</h2>
              <img src={Poster} alt={imdbID} />
            </div>
          </div>

      </NavLink>


        );
      })
      :""}
      </div>
    </section>
        </div>
      )
    }

    export default Movies