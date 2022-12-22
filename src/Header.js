import React from 'react'
import { Link } from 'react-router-dom'
import tapmad from './images/tapmad.png'
import { HiMenuAlt1 } from "react-icons/hi"
import {GrFormClose} from "react-icons/gr"
const Header = () => {
  const clickFunction = () => {
    const menu = document.querySelector(".bars")
    const navbar = document.querySelector(".navLinks")
    menu.classList.toggle(".bars")
    navbar.classList.toggle('open');
  }
  const close = () => {
    const menu = document.querySelector(".close")
    const navbar = document.querySelector(".navLinks")
    menu.classList.toggle("close")
    navbar.classList.remove('open')
  }
  return (
    <section className="header padding">
      <div className=" container-fluid headerSetting">
        <div className="logoSetting">
          <div className="bars d-lg-none">
            <HiMenuAlt1
              style={{ fontSize: "1.7rem" }}
              role="button"
              onClick={clickFunction}
            />
          </div>
          <div>
            <Link to={"/"}>
              <img
                src={tapmad}
                alt="img"
                className="logo"
                width="143"
                height="36"
              />
            </Link>
          </div>
        </div>

        <nav className="navLinks">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to={"/live"}>
            Live
          </Link>
          <Link className="link" to={"/movies"}>
            Movies
          </Link>
          <Link className="link" to={"/shows"}>
            Shows
          </Link>
          <Link className="link" to={"/kids"}>
            Kids
          </Link>
          <Link className="link">Comming soon</Link>
          <Link className="link" to={"/game"}>
            Game
          </Link>
          <span className="close d-lg-none ">
            <GrFormClose className="close-btn" onClick={close} />
          </span>
        </nav>

        <div className="login">
          <span>Login</span>
        </div>
      </div>
    </section>
  )
}

export default Header