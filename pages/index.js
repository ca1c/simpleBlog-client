import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation.component';
import { useEffect, useState } from 'react';
import AuthenticateUser from '../util/authenticate';

export default function Home() {

  const [userData, setUserData] = useState({ username: "" });
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    AuthenticateUser.then((data) => {
        setAuthenticated(data.success);
    })
    .catch((err) => {
        console.log(err);
        setAuthenticated(false);
    })
},[])

  return (
    <>
      <Head>
        <title>SimpleBlog - Home</title>
        <meta name="description" content="Create your space." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation authenticated={authenticated} />
      <div className={styles.hero}>
        <div className="container-fluid">
          <div className={styles.header}>
            <h1 className={styles.heading}>SimpleBlog</h1>
            <h1 className={styles.subheading}>Create your space.</h1>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <h3 className={styles.pheading}>Why use SimpleBlog?</h3>
          <p className={styles.paragraph}>This is just an example paragraph.</p>
        </div>
      </div>
    </>
  )
}
