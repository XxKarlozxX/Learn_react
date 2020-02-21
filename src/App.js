import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Users from './util/Person';

import Greeting from './components/classes';
import Button from './components/button';
import Clock from './components/clock';
import Actionlight from './components/handleEvent'
import Card from './components/card';
import ListPerson from './components/lists'
import SelectList from './components/forms/selectForm';
import Calculator from './components/liftingState';
import Panel from './components/composition';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      activeButton: true
    };
    this.delButton = this.delButton.bind(this);
  }

  delButton() {
    this.setState({
      activeButton: false
    });
  }

  render() {
    return (
      <div className="App">
          <div className="main-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>React JS - Aprendizaje</h1>
          </div>

          <Router>
            <div>
              <nav className="menu">
                <ul>
                  <li>
                    <Link className="active" to="/INRI6">Ejercicio 1</Link>
                  </li>
                  <li>
                    <Link to="/INRI7">Ejercicio 2</Link>
                  </li>
                  <li>
                    <Link to="/INRI8">Ejercicio 3</Link>
                  </li>
                  <li>
                    <Link to="/INRI9">Ejercicio 4</Link>
                  </li>
                  <li>
                    <Link to="/INRI10">Ejercicio 5</Link>
                  </li>
                  <li>
                    <Link to="/INRI11">Ejercicio 6</Link>
                  </li>
                  <li>
                    <Link to="/INRI12">Ejercicio 7</Link>
                  </li>
                  <li>
                    <Link to="/INRI13">Ejercicio 8</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/INRI6">
                  <Greeting name="Friends" />
                </Route>
                <Route path="/INRI7">
                  <Clock />
                  { this.state.activeButton &&  <Button delbutton={this.delButton} /> }
                </Route>
                <Route path="/INRI8">
                  <h1>Manejo de Eventos</h1>
                  <Actionlight/>
                </Route>
                <Route path="/INRI9">
                  <div className="card-ui">
                  {
                    Users.map( (person) => {
                      return <Card key={person.rol} user={person} />;
                    })
                  }
                  </div>
                </Route>
                <Route path="/INRI10">
                  <h1>Listas y Keys</h1>
                  <div>
                    Characters are obtained of <a href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a>
                  </div>
                  <ListPerson />
                </Route>
                <Route path="/INRI11">
                  <h1>Selector de personajes</h1>
                  <SelectList />
                </Route>
                <Route path="/INRI12">
                  <h1>Levantamiento de estado</h1>
                  <div className="card-ui">
                    <Calculator />
                  </div>
                </Route>
                <Route path="/INRI13">
                  <h1>Composición</h1>
                  <div className="card-ui">
                    <Panel>
                      <h2>Compuestos Quimicos</h2>
                      <p>(agregado con props children.)</p>
                      <em>Se podrian agregar Instrucciones en este punto para no modificar la funcionalidad.</em>
                    </Panel>
                  </div>
                </Route>
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
