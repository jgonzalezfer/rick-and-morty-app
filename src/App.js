import React, {useEffect,useState} from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Paginaction from './components/Paginaction'

function App() {
  
  const [characters, setcharacters] = useState([]);
  
  const inicialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (inicialurl) =>{
    fetch(inicialurl)
    .then(response => response.json())
    .then(data => setcharacters(data.results))
    .catch(error => console.log(error))
  };

  useEffect (()=>{
    fetchCharacters (inicialurl);
  }, [])

  return (
    <> 
      <Navbar brand="Rick And Morty"/>

      <div className='container mt-5'>
        <Paginaction/>
        <Characters characters={characters}></Characters>
        <Paginaction/>
      </div>
    </>
  );
}

export default App;
