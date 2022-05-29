import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import Complete from "../../components/Complete";

import img from '../../assets/forth.jpg'
import smk3 from '../../assets/smk3.png'
import smk1 from '../../assets/smk1.png'

import './Cake.scss'

function Cake() {
  const [isOpen, setIsOpen] = useState(false)
  const [failed, setFailed] = useState(false)
  return (
    <Layout picture={img}
      stop={3}
      route={'/forth'}
      isOpen={isOpen}
      text={failed ? 'Lo siento has perdido, intenta de nuevo': null}
    >
      <div className="cake">
        <div className="cake-content">
        <img className="welcome-smoke" src={smk3} alt="smoke" />
          <img className="welcome-smoke1" src={smk1} alt="smoke" />
          <div className="cake-guide">
            COMPLEA LA PALABRA
            <p>
              Parecido al juego del ahorcado, deberas completar la palaba.
            </p>
            <p>El número de letras es limitado, sino lo logras, deberás intentarlo de nuevo</p>
          </div>
          <Complete 
            setIsOpen={(state)=> setIsOpen(state)}
            setFailed={(state)=> setFailed(state)}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Cake;