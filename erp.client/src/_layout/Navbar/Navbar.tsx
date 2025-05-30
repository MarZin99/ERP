import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">ERP</div>
      <div className="navbar__menu">
        <button
          className="navbar__button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu ▾
        </button>
        {isOpen && (
          <ul className="navbar__dropdown">
            <li><Link to="/employees" onClick={() => setIsOpen((prev) => !prev)}>Employees</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}