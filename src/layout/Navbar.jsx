import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="px-16 navbar bg-base-100">
    <div className="flex-1">
      <h1 href="#" className="normal-case text-7xl btn btn-ghost">
        Math Magicians
      </h1>
    </div>
    <div className="flex-none">
      <ul className="px-2 text-4xl menu menu-horizontal">
        <li className="px-5">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="px-5">
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
