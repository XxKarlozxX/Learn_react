import React, { Component } from 'react'
import ContactForm from './contactForm';

export default class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        }
    }

    submit = values => {
        const currentState = this.state.values;
        this.setState({
            values: currentState.concat(values)
        });
    } 
    render() {
        const stateLength = this.state.values.length;
        return(
            <div>
                <ContactForm onSubmit={this.submit} />
                {
                    stateLength > 0 &&
                        <pre>{JSON.stringify( this.state.values)}</pre>
                }
            </div>
        );
    }
}