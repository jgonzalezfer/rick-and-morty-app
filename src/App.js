import React, {useEffect} from 'react'
import Navbar from './components/Navbar'

function App() {
  const inicialurl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (inicialurl) =>{
    fetch(inicialurl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  };

  useEffect (()=>{
    fetchCharacters (inicialurl);
  }, [])
  
  return (
    <Navbar brand="Rick And Morty"/>
  );
}

export default App;
