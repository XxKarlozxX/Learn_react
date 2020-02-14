import React from 'react';
import Welcome from '../functional';

class Greeting extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello from a class component</h1>
          <Welcome name={this.props.name} />
        </div>
      );
    }
}

export default Greeting;
