import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Paginaction from './components/Paginaction'

function App() {

  const [characters, setcharacters] = useState([]);
  const [info, setinfo] = useState({});

  const inicialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (inicialurl) => {
    fetch(inicialurl)
      .then(response => response.json())
      .then(data => {
        setcharacters(data.results);
        setinfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }
  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(inicialurl);
  }, [])

  return (
    <>
      <Navbar brand="Rick And Morty" />

      <div className='container mt-5'>
        <Paginaction prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters}></Characters>
        <Paginaction prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>
  );
}

export default App;
