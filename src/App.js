
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Welcome from './pages/Welcome';
import Collar from './pages/Collar'
import Dress from "./pages/Dress";
import Cake from "./pages/Cake";
import House from "./pages/House";
import Hotel from "./pages/Hotel";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/hunter">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/first" element={<Collar />} />
          <Route exact path="/second" element={<Dress />} />
          <Route exact path="/third" element={<Cake />} />
          <Route exact path="/forth" element={<House />} />
          <Route exact path="/fith" element={<Hotel />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
