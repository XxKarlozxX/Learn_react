import React from 'react';
import { getCharacters } from '../../util/resquest';

class ListsPerson extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
      characters: []
    }

    this.fillCharacters = this.fillCharacters.bind(this);
  }

  fillCharacters() {
    const characters = async () => {
      let response = await getCharacters(10);
      this.setState({
        characters: response
      });
    };
    characters();
  }

  componentDidMount() {
    this.fillCharacters();
  }

  render() {
    const rickChar = this.state.characters;
    return (
      <div className="card-ui">
       {
         rickChar.map( ( char ) => {
           const colorStatus = ( char.status === 'Alive') ? '#1d688e' : '#4e4e4e';
           return (
            <div key={char.id} className="card">

              <div className="content">
                <div className="header">{char.name}</div>
                <ul className="description">
                  <li>Origin: {char.origin.name}</li>
                  <li>Current location: {char.location.name}</li>
                </ul>
              </div>
              <div className="extra content">
                <span style={{ borderRadius: '5px',backgroundColor: colorStatus, padding: '5px', color: '#fff'}} className="right floated">
                  Status {char.status}
                </span>
              </div>   
            </div>
           )
         })
       }
      </div>
    );
  }
}

export default ListsPerson;