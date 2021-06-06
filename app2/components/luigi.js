
import styles from '../styles/Luigi.module.css'

const Luigi = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        G'day! I'm Luigi, a microfrontend. I was born @ {(new Date()).toISOString()}
      </h1>
    </main>
  )
}

export default Luigi
