import React from 'react'
import "./Header.css"
import Head from './head'
import NavBar from './NavBar'
import Search from './Search'

const Header = ({ cartItem }) => {
  return (
    <>
        <Head />
        <Search cartItem={cartItem} />
        <NavBar />
    </>
  )
}

export default Header