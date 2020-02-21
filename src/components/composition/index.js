import React from 'react';
import Panel from './panel';
import Compound from './compount';

class PanelChemistry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compound: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(element) {
        const compound = this.state.compound;
        console.log(element)
        this.setState({
            compound: compound.concat(element)          
        });
    }

    render() {
        return (
            <div className="panel-chemistry">
                {this.props.children}
                <Panel handleSubmit={this.handleSubmit} />
                <fieldset className="recipient">
                    <legend>Componente</legend>
                    <Compound elements={this.state.compound}/>
                </fieldset>
            </div>
        );
    }

}


export default PanelChemistry;