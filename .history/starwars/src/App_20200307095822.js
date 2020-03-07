import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './components/characterCard';
import './App.css';
import styled from 'styled-components';

const CharContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Loading = styled.h2`
  background: black;
  color: yellow;
  border 4px solid yellow;
  border-radius: 10px;
  padding: 7%;

`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people')
    .then(res => {
      setCharacters(res.data.results);
    })
    .catch(err => {
      console.log('There wan an error with the Star Wars API'. err);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <input type='text' />
      <CharContainer>
      {characters.length === 0 ? <Loading>Loading...</Loading> : characters.map((char, idx) => (
        <CharCard key={idx}
        name={char.name}
        birth={char["birth_year"]}
        height={char.height}
        weight={char.mass} />
      )
      )}
      </CharContainer>
    </div>
  );
}

export default App;
