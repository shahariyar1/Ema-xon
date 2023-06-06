import logo from "../../images/Logo.svg";
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="anchor">
        <a href="/Home">Home</a>
        <a href="/Shop">Shop</a>
        <a href="/Order">Order</a>
        <a href="/About">About</a>
      </div>
    </div>
  );
};

export default Header;
