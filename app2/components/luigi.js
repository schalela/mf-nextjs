
import styles from '../styles/Luigi.module.css'

const Luigi = () => {
  return (
    <main className={styles.main}>
      <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png" alt="Luigi" />
      <h1 className={styles.title}>
        G'day! I'm Luigi, a microfrontend.
      </h1>
      <span>Last time I was updated: Jun 6 2021, 9:05PM</span>
    </main>
  )
}

export default Luigi
