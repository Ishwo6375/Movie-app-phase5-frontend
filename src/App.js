import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import MovieContainer from "./components/Pages/MovieContainer";
import MovieDetails from "./components/Pages/MovieDetails";
import DirectorContainer from "./components/Pages/DirectorContainer";
import MovieForm from "./components/Forms/MovieForm";
import EditMovieForm from "./components/Forms/EditMovieForm";
import DirectorDetails from "./components/Pages/DirectorDetails";

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
          <Route exact path="/directors">
            <DirectorContainer />
          </Route>
          <Route exact path="/directors/:id">
            <DirectorDetails />
          </Route>
          <Route exact path="/movie/add">
            <MovieForm />
          </Route>
          <Route exact path="/movie/edit/:id">
            <EditMovieForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
