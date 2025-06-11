import { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { parseJwt } from "../../utils/token.utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = parseJwt(token);
      if (payload?.email) {
        setEmail(payload.email);
      }
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        emailRef.current &&
        !emailRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setEmail(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">ERP</div>

      {email && (
        <div className="navbar__email-wrapper" ref={emailRef}>
          <div
            className="navbar__email"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {email} ▾
          </div>
          {dropdownOpen && (
            <ul className="navbar__dropdown-logout">
              <li onClick={handleLogout}>Wyloguj</li>
            </ul>
          )}
        </div>
      )}

      <div className="navbar__menu">
        <button
          className="navbar__button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu ▾
        </button>
        {isOpen && (
          <ul className="navbar__dropdown">
            <li>
              <Link to="/employees" onClick={() => setIsOpen(false)}>
                Employees
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}