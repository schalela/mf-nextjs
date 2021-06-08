import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/app1">Load Mario</Link>
    <Link href="/">Home</Link>
    <Link href="/app2">Load Luigi</Link>
  </div>
)

export default Nav
