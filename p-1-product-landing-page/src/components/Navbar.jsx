function Navbar() {
  return (
    <nav className="nav-container">
      <div className="logo-img-container">
        <img src="/images/brand_logo.svg" />
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
}
export default Navbar;
