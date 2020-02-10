import React from 'react';
import Welcome from '../functional';

class Greeting extends React.Component {
    render() {
      return (
        <div>
          <Welcome name={this.props.name} />
          <p>This is the begin of something Great!</p>
          <p>I think!</p>
        </div>
      );
    }
}

export default Greeting;
