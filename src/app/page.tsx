import styles from './page.module.css'

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.center}>
          <a href={'https://github.com/padulkemid/revamped'} target={'_blank'} rel={'noopener noreferrer'}>old blog repo</a>
        </div>
        <div className={styles.center}>
          <p><br />rebuilding in go + htmx</p>
        </div>
        <div className={styles.center}>
          <code className={styles.code}>@padulkemid everywhere</code>
        </div>
      </div>
    </main>
  )
}

export default Home
