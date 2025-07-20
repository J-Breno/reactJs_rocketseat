import styles from "./Post.module.css";
import { Comment } from "./Comment.jsx";
import { Avatar } from "./Avatar.jsx";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/j-breno.png" />
          <div className={styles.authorInfo}>
            <strong>João Breno</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time dateTime="2025-07-19 22:51:12">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe o seu comentário</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
