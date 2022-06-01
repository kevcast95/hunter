import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Modal.scss'

function Modal({ num, route, text, location }) {
  const navigate = useNavigate()
  const [showContinue, setShowContinue] = useState(false)

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
            <a 
              href={location} 
              target="_blank" 
              className="welcome-start" 
              rel="noreferrer"
              onClick={()=> setShowContinue(true)}  
            >
              Destino
            </a>
            <button 
              type="button" 
              className="welcome-start"
              onClick={showContinue ? 
                ()=> navigate(route) 
                : 
                () => alert('Primero debes ir al siguiente destino, luego regresas')
              }
            >
              {num !== 5 ?
                'Continuar' : 'Finalizar'
              }
            </button>
          </>
        }
      </div>
    </div>
  )
}

export default Modal;