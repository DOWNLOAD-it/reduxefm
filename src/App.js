import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCity from "./AddCity";
import ModifyPopulation from "./ModifyPopulation";
import CountryDetails from "./CountryDetails";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addCity" element={<AddCity />} />
            <Route
              exact
              path="/modifyPopulation"
              element={<ModifyPopulation />}
            />
            <Route exact path="/country/:code" element={<CountryDetails />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
