import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
    <ul>
        <Link href='/'><a><li href="#">Home</li></a></Link>
        <Link href='/about'><a><li href="#">About</li></a></Link>
        <Link href='/blog'><a><li href="#">Blog</li></a></Link>
        <Link href='/contact'><a><li href="#">Contact</li></a></Link>
    </ul>
  </nav>
  )
}

export default Navbar