import Link from 'next/link'
import styles from '../styles/home.module.css'

export default async function Home() {
  return (
    <section className={styles.home}>
      <div>
      <h2 className="name">Soe Sandar Win</h2>
      </div>
      <div className="blog-container">
        <Link href='/blog'>Blog</Link>
      </div>
      <div className="contact">
      <Link href='/contact'>Contact</Link>
      </div>
    </section>
  )
}
