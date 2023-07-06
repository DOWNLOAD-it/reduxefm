import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/addCity">add new city</Link>
        <Link to="/modifyPopulation">modify population</Link>
      </div>
    </nav>
  );
};

export default Navbar;
