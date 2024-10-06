import { Fragment } from "react";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
