import React from 'react';
import Paper from '@material-ui/core/Paper';

function Cuadrito(props) {
    const colors = [
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
    return(
      <Paper elevation={4} style={{backgroundColor: colors[props.colorKey] }} />
    );
}

function areEqual(prevProps, nextProps) {
    if (nextProps.colorKey === prevProps.colorKey) {
        console.log("render again");
        return true;
    }
    console.log("No render");
    return false;
}

export default React.memo(Cuadrito, areEqual);

//export default Cuadrito;