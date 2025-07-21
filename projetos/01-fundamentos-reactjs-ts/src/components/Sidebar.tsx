import { Avatar } from "./Avatar.tsx";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.alphacoders.com/138/1384406.jpg"
          alt=""
        />
        <div className={styles.profile}>
          <Avatar src="https://github.com/j-Breno.png" />
          <strong>João Breno</strong>
          <span>Web Developer</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
