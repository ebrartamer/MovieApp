import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  const [movie, setMovie] = useState([]);
  const [category, setCategory] = useState('popular');
  const [searchMovie, setSearchMovie] = useState('');

  const getMovieRequest =async () =>{
      const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchMovie}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setMovie(responseJson.results)
      console.log(responseJson.results)
  }

  useEffect(()=> {
      getMovieRequest(searchMovie);
  },[searchMovie, category])

  return (
    <div className="App">
      <ChakraProvider>
      <Navbar/>
      
      </ChakraProvider>
    </div>
  );
}

export default App;
