import React from 'react';
import { getCharacters } from '../../util/resquest';

class SelectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          characters: [],
          character: 'Character'
        }
    
        this.fillCharacters = this.fillCharacters.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({character: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    
    fillCharacters() {
        const characters = async () => {
          let response = await getCharacters(5);
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
        return(
            <form>
                <label>
                    List od Charcaters: {' '}
                    <select value={this.state.character} onChange={this.handleChange} >
                        <option>Seleccciona un personaje</option>
                        {
                        rickChar.map( char => {
                            return (
                              <option key={char.id} value={char.name}>{char.name}</option>
                            );
                        })
                        }
                    </select>
                </label>
                <br />
                <br />
                <br />
                <label>
                    Character selected
                    <input
                      disabled="disabled"
                      type="text"
                      value={this.state.character}/>
                </label>
            </form>
        );
    }
}

export default SelectList;