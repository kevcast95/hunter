import React from "react";
import Modal from "../Modal";

import './Layout.scss'

function Layout({
  children,
  picture,
  stop,
  route,
  location,
  text,
  isOpen }) {
  
  return (
    <main className="layout">
      <section
        className="layout-image"
        style={{ backgroundImage: `url(${picture})` }}
      >
      </section>
      <section className="layout-content_game">
        <div className="layout-stops">
          <h3 className="stops-text">Paradas</h3>
          <h3 className="stops-num">{stop}/5</h3>
        </div>
        {children}
      </section>
      {isOpen &&
        <Modal
          num={stop}
          route={route}
          text={text}
          location={location}
        />
      }
    </main>
  )
}

export default Layout;