import { Outlet, Link } from "react-router-dom";
import "./layot.css";
const Layout = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>
            <Link to="/" className="logo">
              APPLE HOUSE
            </Link>
          </h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">SHOP</Link>
            </li>
            <li>
              <Link to="/cart">CART</Link>
            </li>
          </ul>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
