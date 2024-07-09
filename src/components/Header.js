import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src="/img/logo.png" alt="Bold and Beauty" className="logo" />

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="cart">Cart</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>
    </header>
  );
}

export default Header;
