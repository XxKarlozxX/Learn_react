import React from 'react';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: '',
            name: '',
            count: 1,
            number: ''
        };

        this.color = [
            "#ff6373",
            "#008080",
            "#1d688e",
            "#1f748e",
            "#ce5755",
            "#63c7ff",
            "#375f77",
            "#283f4e"
          ];

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }
 
    handleSubmit(event) {
        event.preventDefault();
        
        if ( this.state.symbol === '') {
            alert('Debes ingresar un Simbolo para el Elemento');
            return;
        }
        if ( this.state.name === '' ) {
            alert('Debes ingresar un nombre para el Elemento');
            return;
        }

        const color = this.changeBackground();
        const features = {
            symbol: this.state.symbol,
            name: this.state.name,
            count: this.state.count,
            background: color
        };

        this.props.handleSubmit(features);

        this.setState({
            symbol: '',
            name: '',
            count: 1
        });
    }
    
    changeBackground() {
        let position = '';
        do {
          position = Math.floor(Math.random() * 8);
        } while ( position === this.state.number );
        this.setState({
            number: position
        });
        return this.color[position];
    }

    render() {
        return(
            <form className="panel" onSubmit={this.handleSubmit} >
                <label>
                    Simbolo Quimico:
                    <input
                      name="symbol"
                      value={this.state.symbol}
                      onChange={this.handleInputChange}
                      type="text"/>
                </label>
                <label>
                    Nombre del elemento:
                    <input
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      type="text" />
                </label>
                <label>
                    Cantidad de Elementos:
                    <input
                      name="count"
                      value={this.state.count}
                      onChange={this.handleInputChange}
                      min="1"
                      type="number" />
                </label>
                <input type="submit" value="submit" />
           </form>
        );
    }
}

export default Panel;