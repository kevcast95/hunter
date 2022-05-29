import React from "react";
import { Link } from "react-router-dom";
import './Modal.scss'

function Modal({ num, route, text, action }) {
  return (
    <div className="next">
      <div className="next-content">
        <h1>
          {!text ?
            `Has resuelto el reto #${num}`
            :
            text
          }
        </h1>
        {!text &&
          <Link to={route} className="welcome-start">
            Continuar
          </Link>
        }
      </div>
    </div>
  )
}

export default Modal;