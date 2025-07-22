import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="" />
        <nav>
          <NavLink
            to="/"
            title="Timer"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Timer size={24} />
          </NavLink>
          <NavLink
            to="/history"
            title="Histórico"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  );
}
