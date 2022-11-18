import React from 'react'
import Movies from './Movies'
// import { AppContext } from '../Context/context'
import Search from './Search'


const Home = () => {
  // const name=useContext(AppContext);
    
  return <>
  <Search/>
  <Movies/>

  </>
}

export default Home