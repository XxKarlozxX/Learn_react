import React from 'react';
import Element from './element';

/**
 * Operacione spor hacer
 * imprimir la cantidad correspondiente de elementos
 * y asignarles un color diferente dependiendo el grupo
 */
class Compound extends React.Component {
  render() {
    const compound = this.props.elements;
    const element = [];
    for( let j=0; j< compound.length; j++) {
      for (let i = 0; i < compound[j].count; i++) {
        element.push(
          <Element
          key={compound[j].symbol + i}
          symbol={compound[j].symbol}
          name={compound[j].name} 
          background={compound[j].background} />
        );        
      }
    }

    return(
      <div className="compound">
      {

      compound.length > 0 && 
        element
      }
      </div>
    );
  }
}

export default Compound;