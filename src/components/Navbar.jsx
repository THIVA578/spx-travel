import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

export let Navbar = () => {
  let [toggle, settoggle] = useState(false);
  let [clsname, setclsname] = useState("");

  let [color, setcolor] = useState(false);

  useEffect(() => {
    setclsname(toggle ? "nav-menu active" : "nav-menu");
  }, [toggle]);

  let maketoggle = () => {
    settoggle(!toggle);
  };

  let makecolor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  window.addEventListener("scroll", makecolor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>SPX TRVL</h1>
      </Link>
      <ul className={clsname}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>

        <li>
          <Link to="/training">Training</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={maketoggle} className="hamburger">
        {toggle ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
