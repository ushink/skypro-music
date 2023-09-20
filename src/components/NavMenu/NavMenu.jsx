import "./NavMenu.css";
import ShowMenu from "../NavShowMenu.jsx";
import { useState } from "react";

export default function MainNav() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {visible && <ShowMenu />}
    </nav>
  );
}
