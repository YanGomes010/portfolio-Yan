import { NavLink } from "react-router-dom";
import styles from "./headeritem.module.css";


export default function HeaderItem({ children, to }) {

  return (
    <>
      <NavLink
        className={({ isActive }) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}
        `}
        to={to}
        end
      >
        {children}
      </NavLink>
    </>
  );
}
