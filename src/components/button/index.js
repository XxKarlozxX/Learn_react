import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.isMount = true;
    this.shouldUpdate = true;
    this.didUpdate = true;

    this.state = {
      text: 'Primer texto en el boton renderizado'
    };
    console.log('El componente aun no se monta en el DOM');
  }

  componentDidMount() {
    this.timeID = setTimeout(
      () => this.changeTextDidMount(),
      700
    );
  }
    
  changeTextDidMount() {
    this.setState({
        text: 'Estado dentro de DidMount'
    });
  }

  componentDidUpdate() {
    if ( this.didUpdate ) {
      this.didUpdate = false;
      this.time2ID = setTimeout(() => {
        this.setState({
          text: 'El componente ha sido actualizado'
        });
      }, 2000);
    } else {
      this.time3ID = setTimeout(() => {
        this.setState({
          text: 'Fin de la actualizacion'
        });
      }, 2000);
    }
  }

  shouldComponentUpdate() {
    if ( this.shouldUpdate ) {
      this.shouldUpdate = false;
      this.time4ID = setTimeout(() => {
        this.setState({
          text: 'Preparando la actualizacion!'
        });
      }, 1000 );
    }
    return true;
  }
   
  componentWillUnmount() {
    console.log("Desmontado desde el boton")
    clearTimeout(this.timeID);
    clearTimeout(this.time2ID);
    clearTimeout(this.time3ID);
    clearTimeout(this.time4ID);
  }

  render() {
    return (
      <div className="step">
        <h2>Manejo de estado y ciclo de vida</h2>
        <button
        style={{ padding:'10px' }}
        onClick={this.props.delbutton}>
        {this.state.text}
        </button>
      </div>
    );
  }
}

export default Button;
