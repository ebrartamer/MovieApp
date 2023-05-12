import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox'

function App() {
  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
  })

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
      <ChakraProvider theme={theme}>

      <Navbar
      searchBox = {SearchBox}/>

      <Box  overflowX='scroll'>
      <MovieList
      movies={movie}/>
      </Box>
      

      </ChakraProvider>
    </div>
  );
}

export default App;
