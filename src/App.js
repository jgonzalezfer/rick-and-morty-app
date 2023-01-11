import React, {useEffect,useState} from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters'

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
        <Characters characters={characters}></Characters>
      </div>
    </>
  );
}

export default App;
