import styles from "../styles/notfound.module.css"

export default function NotFound() {
  return (
    <div class={styles.container}>
      <div>
      <h1>Error 404</h1>
      <p>Looks like your trying to access a page that doesnt exist!</p>
      </div>
    </div>
  );
}