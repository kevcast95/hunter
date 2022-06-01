import React from "react";
import { Link } from "react-router-dom";
import './Modal.scss'

function Modal({ num, route, text, location }) {
  return (
    <div className="next">
      <div className="next-content">
        <h1>
          {!text && num !== 5 ?
            `Has resuelto el reto #${num}`
            :
            text
          }
          {num === 5 &&
            'Travesura realizada'
          }
        </h1>
        {!text &&
          <>
            <a href={location} target="_blank" className="welcome-start" rel="noreferrer">
              Destino
            </a>
            <Link to={route} className="welcome-start">
              {num !== 5 ?
                'Continuar' : 'Finalizar'
              }
            </Link>
          </>
        }
      </div>
    </div>
  )
}

export default Modal;