import React, { Component } from 'react'
import withStorage from '../HOC/HOCStorage';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <FormControl>
                        <TextField
                          id="user-name"
                          onChange={this.handleChangeInput}
                          name="userName"
                          label="User name" />
                    </FormControl>
                    <FormControl>
                        <TextField
                          id="nick-name"
                          onChange={this.handleChangeInput}
                              name="nickName"
                          label="Nick Name" />
                    </FormControl>
                    <Button type="submit" variant="contained">Default</Button>
                </form>
               My username is {this.state.userName}, and my nick name is {this.state.nickName}
            </div>
        )
    }
}

const WrappedComponent = withStorage(ComponentNeedingStorage);

export default WrappedComponent;
