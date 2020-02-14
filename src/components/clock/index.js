import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  /**
   * Cuando render termina de montar el componente
   * llama a este metodo y establece un timer que
   * se llamara despues de 1 segundo y este timer
   * cambiara el estado a la fecha actual, por lo
   * que el metodo render se invocara de nuevo,
   * actualizando la  hora
   */
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
        date: new Date()
    });
  }

  render() {
      return(
        <div>
          <h1>State & lifecycle</h1>
          <h2>It id {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
  }
}

export default Clock;
