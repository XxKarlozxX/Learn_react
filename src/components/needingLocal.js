import React, { Component } from 'react'
import withStorage from '../HOC/HOCStorage';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class ComponentNeedingStorage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            nickName: ''
        };
    }
        
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.remove('userName');
        this.props.remove('nickName');

        this.props.save('userName', this.state.userName);
        this.props.save('nickName', this.state.nickName);

    }

    handleChangeInput = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.remove('userName');
        this.props.remove('nickName');
        
    }

    render() {
        return (
            <Grid 
                container
                elevation={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={8}>
                    <Typography variant="h3" gutterBottom>
                        Higher-Orderer Component
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Typography variant="body1" gutterBottom>
                            Component that Set a couple of values into the local Storage.
                        </Typography>
                        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                            <FormControl margin="dense">
                                <TextField
                                id="user-name"
                                onChange={this.handleChangeInput}
                                name="userName"
                                label="User name" />
                            </FormControl>
                            <FormControl margin="dense">
                                <TextField
                                id="nick-name"
                                onChange={this.handleChangeInput}
                                    name="nickName"
                                    label="Nick Name" />
                            </FormControl>
                            <ButtonGroup  variant="contained" color="primary">
                                <Button type="submit" variant="contained">Set LocalStorage</Button>
                                <Button type="button" onClick={this.handleClick} variant="contained">Remove Local Storage</Button>
                            </ButtonGroup>
                        </form>
                   
                    <Typography variant="overline" display="block" gutterBottom>
                        My username is {this.state.userName}, and my nick name is {this.state.nickName}.
                    </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

const WrappedComponent = withStorage(ComponentNeedingStorage);

export default WrappedComponent;
