import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const Blog = () => {
  return ( <div className={styles.container}>
    <main className={styles.main}>
    <div >
      <Link href={'/blogpost/learn-javascript'}><a>
      <h3 className={styles.blogItemh3}>How to learn javascript in 2022?</h3></a></Link>
      <p>Javascript is the language used to design logic for the web.</p>
    </div>
    <div className="blogItem">
      <h3>How to learn javascript in 2022?</h3>
      <p>Javascript is the language used to design logic for the web.</p>
    </div>
    <div className="blogItem">
      <h3>How to learn javascript in 2022?</h3>
      <p>Javascript is the language used to design logic for the web.</p>
    </div>
    </main>
  </div>
  )
}

export default Blog