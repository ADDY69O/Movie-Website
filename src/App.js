  import './App.css';
  import React from 'react';
  import { Routes, Route } from "react-router-dom";
  import Home from './Components/Home'
  import SearchMovies from './Components/SearchMovies';
import Error from './Components/Error';
  function App() {
    return (
      < >

        <Routes>
            <Route  path="/" element={<Home />}/>
              <Route  path="movie/:id" element={<SearchMovies />} />
              
              <Route  path="*" element={<Error />} />
              
            
          </Routes>

        
      
        </>
      
    );
  }

  export default App;
