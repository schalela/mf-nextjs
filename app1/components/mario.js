
import styles from '../styles/Mario.module.css'

const Mario = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        G'day! I'm Mario, a microfrontend. I was born @ {(new Date()).toISOString()}
      </h1>
    </main>
  )
}

export default Mario
