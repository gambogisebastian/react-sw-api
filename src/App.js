import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { getAll, getIndiceByRubro, getDetByIndice } from "./servicios/sw-api";
import Indice from "./componentes/Indice";

class App extends React.Component {
  constructor() {
    // super must be called before accessing 'this'
    super();
    // state is an object that holds information
    // in its properties
    this.state = {
      rubroIdx : "",
      rubro: {},
      indice: [],
      detalle: []
    };
  }
  async componentDidMount() {
    const rubro = await getAll();
    //console.log(rubro);
    this.setState({ rubro });
    
  }
  async componentDidUpdate() {
    const rubros = await getIndiceByRubro(this.state.rubroIdx);
    console.log(rubros.results);
    //const detalle = await getDetByIndice();
    //this.setState({indice: rubros.results});
  }
  selectorRubro = (rubroIdx) => {
    alert(rubroIdx);
    this.setState({rubroIdx});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React-Swapi
          {Object.keys(this.state.rubro).map((rbr) => (
            <button key={rbr} onClick={() => this.selectorRubro(rbr)}>
              {rbr}
            </button>
          ))}
        </header>
        <div>{
                    
          <Link to=""></Link>
          }
        </div>
        <Switch>
          <Route exact path="/In" render={props => <Indice selectorRubro={this.selectorRubro} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
