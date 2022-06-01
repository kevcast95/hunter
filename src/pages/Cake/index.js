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
      location={'https://www.google.com.co/maps/place/Cancha+Sint%C3%A9tica+La+Arenosa+%E2%9A%BD/@10.917923,-74.8182023,20z/data=!4m13!1m7!3m6!1s0x8ef42dbfeca944a3:0x9b7c6c4856f6d540!2sCra+78+%2382-32,+Barranquilla,+Atl%C3%A1ntico!3b1!8m2!3d11.0213567!4d-74.8052002!3m4!1s0x8ef5d387fd6c45b7:0x8fe8d5c472a70695!8m2!3d10.917923!4d-74.818022?hl=es&authuser=0'}
      isOpen={isOpen}
      text={failed ? 'Lo siento has perdido, intenta de nuevo': null}
    >
      <div className="cake">
        <div className="cake-content">
        <img className="cake-smoke" src={smk3} alt="smoke" />
          <img className="cake-smoke1" src={smk1} alt="smoke" />
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