import "react";
import logoSpotfy from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotfy} alt="Logo spotfy" />
      <a className="header__link" href="/">
        <h1>Spotfy</h1>
      </a>
    </div>
  );
};

export default Header;
