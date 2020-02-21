import React from 'react';

function Element(props) {
    const bgColor = props.background;
    return (
        <div style={{ backgroundColor: bgColor }} className="element">
            <h2>{props.symbol}</h2>
            <small>{props.name}</small>
        </div>
    );
}

export default Element;