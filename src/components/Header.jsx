import "react";
import logoSpotfy from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div>
      <img src={logoSpotfy} alt="Logo spotfy" />
      <a href="/">
        <h1>OLA MUNDO</h1>
      </a>
    </div>
  );
};

export default Header;
