import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { getAll } from "./servicios/sw-api";
import Naves from "./paginas/Naves";

class App extends React.Component {
  state = {
    listaGral: {},
    naves: []
  };
  async componentDidMount() {
    const listaGral = await getAll();
    console.log(listaGral);
    this.setState({ listaGral });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React-Swapi
          {Object.keys(this.state.listaGral).map((categoria, k) => (
            <Link key={k} to="/Naves">
              {categoria}
            </Link>
          ))}
        </header>
        <Switch>
          <Route exact path="/Naves" render={props => <Naves />} />
        </Switch>
      </div>
    );
  }
}

export default App;
