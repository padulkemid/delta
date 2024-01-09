import dynamic from 'next/dynamic'
import styles from './page.module.css'

const TerminalScreen = dynamic(() => import('./terminal'), { ssr: false })

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <code className={styles.code}>rebuilding in progress</code>
      </div>
      <TerminalScreen />
    </main>
  )
}

export default Home
