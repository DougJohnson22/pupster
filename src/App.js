import './App.css';
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import NavTabs from "./components/NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/"><About /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/discover"><Discover /></Route>
        <Route exact path="/search"><Search /></Route>
      </div>
    </Router>
  );
}

export default App;
