import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Pages/Home";

import Contact from "./components/Pages/Contact";
import MovieContainer from "./components/Pages/MovieContainer";
import MovieDetails from "./components/Pages/MovieDetails";


function App() {
  
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        
          <Route exact path="/contact">
          <Contact />
          </Route>
          <Route exact path="/movies">
          <MovieContainer />
          </Route>
           <Route exact path="/movies/:id">
         <MovieDetails />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
