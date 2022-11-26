import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Klassroom.ai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <Image
          src="/images/app-logo.png"
          alt="Klassroom.ai"
          width={240}
          height={30}
        />

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li className={styles.navLink}>
              <a href="#">Online classes</a>
            </li>
            <li className={styles.navLink}>
              <a href="#">Courses</a>
            </li>
            <li className={styles.navLink}>
              <a href="#">Programs & degrees</a>
            </li>
            <li className={styles.navLink}>
              <a href="#">Learning material</a>
            </li>
            <li className={styles.navLink}>
              <a href="#">Success stories</a>
            </li>
            <li className={classNames(styles.navLink, styles.highlight)}>
              <a href="#">Login</a>
            </li>

            <li className={classNames(styles.navLink, styles.highlight)}>
              <button className={styles.button}>Become a Tutor</button>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
