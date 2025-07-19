import styles from "./Sidebar.module.css";

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
          <strong>João Breno</strong>
          <span>Web Developer</span>
        </div>
        <footer>
          <a href="#">Editar seu perfil</a>
        </footer>
      </aside>
    </>
  );
}
