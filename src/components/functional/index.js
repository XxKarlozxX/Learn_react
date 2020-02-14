import React from 'react';

function Welcome(props) {
  return (
    <h2
      style={{
        borderWidth: '1',
        borderStyle:'dotted',
        borderColor:'#fff'
      }}>
    Hello {props.name} from functional component
    </h2>
  );
}

export default Welcome;
