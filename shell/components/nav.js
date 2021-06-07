import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/app1">Load Microfrontend 1</Link>
    <Link href="/">Home</Link>
    <Link href="/app2">Load Microfrontend 2</Link>
  </div>
)

export default Nav
