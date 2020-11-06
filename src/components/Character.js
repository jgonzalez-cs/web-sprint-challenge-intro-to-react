import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Declare styled components outside of Character component / components they serve
// Capitalize the styled component
// Don't forget semicolons
const StyledCharacter = styled.ul`
  color: red;
  font-weight: 900;
`

// Write your Character component here
export default class CharacterList extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      this.setState({ characters : res.data.results})
    })
  }

  render() {
    return <StyledCharacter>{this.state.characters.map(character => <li key={character.id}>{character.name }</li>)}</StyledCharacter>
  }
}