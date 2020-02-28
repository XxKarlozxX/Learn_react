import React from 'react';
import Button from '@material-ui/core/Button';

class Actionlight extends React.Component {
    constructor(props){
        super(props);
        this.color = [
            "#fff",
            "#ff6373",
            "#008080",
            "#1d688e",
            "#1f748e",
            "#ce5755",
            "#63c7ff",
            "#375f77",
            "#283f4e"
        ];

        this.changeBackground = this.changeBackground.bind(this);
    }

    changeBackground() {
        let position = Math.floor(Math.random() * 9);
        document.body.style.color = ( position !== 0 ) ? '#fff' : '#000';
        document.body.style.backgroundColor = this.color[position];
    }

    render() {
        return(
            <div>
                <Button variant="contained" onClick={this.changeBackground}>
                    Click to Change
                </Button>
            </div>
        );
    }
}

export default Actionlight;
