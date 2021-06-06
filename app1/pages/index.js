import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontend Demo App 1</title>
        <meta name="description" content="This is an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          G'day! I'm Mario, a microfrontend. I was born @ {(new Date()).toISOString()}
        </h1>
      </main>
    </div>
  )
}
