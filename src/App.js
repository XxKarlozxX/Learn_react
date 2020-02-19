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
          <div className="header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>React JS - Aprendizaje</h1>
          </div>

          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/INRI6">Componente Funcional & clases</Link>
                  </li>
                  <li>
                    <Link to="/INRI7">Estado y ciclo de vida</Link>
                  </li>
                  <li>
                    <Link to="/INRI8">Manejo de Eventos</Link>
                  </li>
                  <li>
                    <Link to="/INRI9">Renderizado Condicional</Link>
                  </li>
                  <li>
                    <Link to="/INRI10">Listas & keys</Link>
                  </li>
                  <li>
                    <Link to="/INRI11">Componentes controlados</Link>
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
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
