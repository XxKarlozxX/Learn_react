import React from 'react';

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
        document.body.style.backgroundColor = this.color[position];
    }

    render() {
        return(
            <div>
                <button onClick={this.changeBackground}>Click to Change</button>
            </div>
        );
    }
}

export default Actionlight;