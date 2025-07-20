import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <>
      <div className={styles.comment}>
        <img src="https://github.com/j-breno.png" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Diego Fernandes</strong>
                <time dateTime="2025-07-19 22:51:12">Cerca de 1h atrás</time>
              </div>
              <button title="Deletar comentário">
                <Trash size={20} />
              </button>
            </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
          <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>28</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
