import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Box, ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox'
import MovieListHeading from './components/MovieListHeading';

function App() {
  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    styles: {
      global: {
        body: {
          backgroundColor: "gray.800",
        },
        html: {
          backgroundColor: "gray.800",
        },
      },
    },
  });

  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);


  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovie(responseJson.results)

  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  const handleFavouriteClick = (movie) => {
    const newFavouritesList = [...favourites, movie];
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList)
  }
  const removeFavouriteMovie = (movie) => {
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.id!==movie.id
    )
    setFavourites(newFavouritesList)
    saveToLocalStorage(newFavouritesList)
  }
  useEffect(()=> {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-localStorage')
    )
    if(movieFavourites) {
      setFavourites(movieFavourites)
    }
  })
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-localStorage', JSON.stringify(items))
  }

  return (
    <div className="App">
      <ChakraProvider theme={theme} colorMode={theme.config.initialColorMode}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <Box as="nav" bg="gray.900" boxShadow="sm" top={'0'} width={'100%'} display="flex" justifyContent="space-between" alignItems="center">
          <Box py={{ base: '4', lg: '5' }}>
            <Navbar />
          </Box>
          <Box py={{ base: '4', lg: '5' }}>
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Box>
        </Box>


        <Box overflowX='scroll'>
          <MovieList
            
            handleFavouriteClick={handleFavouriteClick}
            movies={movie} />
            
        </Box>

        <MovieListHeading heading='Favourites' />

        <MovieList
        movies={favourites}
        handleFavouriteClick={removeFavouriteMovie}
        />

      </ChakraProvider>
    </div>
  );
}

export default App;
