//Rect and Next imports
import React, { useState } from 'react'
import Link from 'next/link'

//Libraries imports
import { motion } from 'framer-motion'
import { Link as LinkSmooth } from "react-scroll";

//Styles
import { MenuWrapper } from './menuElements'


export default function index() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <MenuWrapper>
      <div className="hamburguer" onClick={toggleMenu}>
        <div className="bars" data-menuOpen={menuOpen}></div>
        <div className="bars" data-menuOpen={menuOpen}></div>
        <div className="bars" data-menuOpen={menuOpen}></div>
      </div>
      <motion.nav className="menu" data-menuOpen={menuOpen} layout>
        <ul>
          <LinkSmooth smooth={true} to="about" onClick={toggleMenu}>
            <li className="_1"> Quiénes Somos </li>
          </LinkSmooth>
          <LinkSmooth smooth={true} to="committees" onClick={toggleMenu}>
            <li className="_2"> Comités </li>
          </LinkSmooth>
          <LinkSmooth smooth={true} to="secretaries" onClick={toggleMenu}>
            <li className="_3"> Secretarías </li>
          </LinkSmooth>
          <LinkSmooth smooth={true} to="gallery" onClick={toggleMenu}>
            <li className="_4"> Galería </li>
          </LinkSmooth>
          <Link href="/login" onClick={toggleMenu}>
            <li className="button">Inicia Sesión</li>
          </Link>
          <Link href="/signup" onClick={toggleMenu}>
            <li className="button ghost">Regístrate</li>
          </Link>
        </ul>
      </motion.nav>
    </MenuWrapper>
  )
}
