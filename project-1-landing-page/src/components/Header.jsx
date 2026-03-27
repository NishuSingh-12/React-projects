function Header() {
  return (
    <header className="header">
      <div className="img-container">
        <img src="public/images/brand_logo.svg" alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">MENU</a>
        </li>
        <li>
          <a href="#">LOCATION</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <button>Login</button>
    </header>
  );
}
export default Header;
