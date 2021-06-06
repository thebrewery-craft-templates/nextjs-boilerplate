import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Craft Next App</title>
        <meta name="description" content="Generated by Craft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <img src="/craft.png" width="222" />
          <h1
            className={styles.title}
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "30px",
            }}
          ></h1>
          <img src="/nextjs.png" width="222" />
        </div>
        <h1 className={styles.title}>Welcome to your personal site</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>src/pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span style={{ marginTop: "30px" }}>Powered by </span>
        <span className={styles.logo}>
          <Image
            src="/brewery.png"
            alt="The Brewery Logo"
            width={115}
            height={46}
          />
        </span>
      </footer>
    </div>
  );
}