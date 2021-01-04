import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import { useState } from "react"
import NavBar from "./NavBar"
import ColorList from "./ColorList"
import NewColor from "./NewColor"
import ColorDetail from "./ColorDetail"
import './App.css';


function App() {
  const [colors, setColors] = useState([])

  const addColor = (color) => {
    setColors(c => [color, ...c])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <NavBar />
            <ColorList colors={colors} />
          </Route>
          <Route exact path="/colors/new">
            <NewColor addColor={addColor} />
          </Route>
          <Route exact path="/colors/:color">
            <ColorDetail colors={colors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
