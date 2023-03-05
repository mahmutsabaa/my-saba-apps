import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const activeLink = "text-primary text-decoration-none";
  const normalLink = "text-decoration-none text-secondary";
  return (
    <>
      <nav className="layout">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Soru Cevap
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Arama Yapma
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quote-random"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Rastgele Metin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/color-random"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Rastgele Arkaplan Rengi Değiştirme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/numberrandom"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Rastgele Sayı Üretme
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
