import React from 'react';
import { getCharacters } from '../../util/resquest';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      paddingTop: 25
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

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
                <FormControl className={useStyles.formControl}>

                    <InputLabel htmlFor="character-select">Select Character</InputLabel>
                    <Select
                    native
                    value={this.state.character}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'charracter',
                        id: 'charcater-select',
                      }}
                    >
                    <option value="" />
                    {
                    rickChar.map( char => {
                        return (
                            <option key={char.id} value={char.name}>{char.name}</option>
                        );
                    })
                    }
                   
                    </Select>
                </FormControl>
               
                <br />
                <label>
                    <TextField
                      style={{ padding: '7px', marginTop: '150px'}}
                      disabled
                      type="text"
                      value={this.state.character}/>
                </label>
            </form>
        );
    }
}

export default SelectList;