import {Logo} from "components/base";
import {NavLink} from "react-router-dom";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      text: "Home",
      path: "/",
    },
    {
      id: 2,
      text: "About",
      path: "/about",
    },
    {
      id: 3,
      text: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="d-flex align-items-center justify-content-center flex-column py-3">
      <Logo />
      <nav className="navbar">
        <div className="container py-3">
          <ul className="nav list-unstyled d-flex">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item me-3 fw-bolder">
                <NavLink className="fs-5" to={item.path}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
