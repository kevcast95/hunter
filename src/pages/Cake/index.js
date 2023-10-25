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
      location={'https://www.google.com.co/maps/place/Cl.+80c+%2318c-46,+Soledad,+Barranquilla,+Atl%C3%A1ntico/@10.9184554,-74.8180569,18z/data=!3m1!4b1!4m5!3m4!1s0x8ef5d2f98aa40ab7:0xbafbe89020985495!8m2!3d10.9184532!4d-74.8171367?hl=es&authuser=0'}
      isOpen={isOpen}
      text={failed ? 'Lo siento has perdido, intenta de nuevo' : null}
    >
      <div className="cake">
        <div className="cake-content">
          <img className="cake-smoke" src={smk3} alt="smoke" />
          <img className="cake-smoke1" src={smk1} alt="smoke" />
          <div className="cake-guide">
            COMPLETA LA PALABRA
            <p>
              Parecido al juego del ahorcado, deberas completar la palaba.
            </p>
            <p>El número de letras es limitado, sino lo logras, deberás intentarlo de nuevo</p>
          </div>
          <Complete
            setIsOpen={(state) => setIsOpen(state)}
            setFailed={(state) => setFailed(state)}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Cake;