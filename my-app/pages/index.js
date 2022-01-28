import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poetry Finder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>Welcome to our Poetry Finder</h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>About Us</a>
          </Link>

          <Link href="/fetchapi">
            <a className={styles.card}>The poems of Edgar Allen Poe</a>
          </Link>
          <Link href="/useEffect">
            <a className={styles.card}>Search by Poet</a>
          </Link>

         
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
