import React, { useState } from "react";
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import Layout from "../../components/Layout";
import Series from "../../components/Series";

import img from '../../assets/fith.jpg'
import smk3 from '../../assets/smk3.png'

import './House.scss'

function House() {
  const [isOpen, setIsOpen] = useState(false)
  const [failed, setFailed] = useState(false)
  return (
    <Layout picture={img}
      stop={4}
      route={'/fith'}
      location={'https://www.google.com.co/maps/place/Cra.+19+%2382a-46,+Soledad,+Barranquilla,+Atl%C3%A1ntico/@10.9203777,-74.8198168,17z/data=!3m1!4b1!4m5!3m4!1s0x8ef5d2fa46a2e2b1:0xf4bdbc9efd8df722!8m2!3d10.9203777!4d-74.8176281?hl=es&authuser=0'}
      isOpen={isOpen}
      text={failed ? 'Lo siento has perdido, intenta de nuevo': null}
    >
      <div className="house">
        <img className="house-smoke" src={smk3} alt="smoke" />
        <div className="house-content">
          <div className="house-guide">
            PROBEMOS TU CAPACIDAD DE DEDUCCION
            <p>Descubre el valor de cada imagen</p>
            <p>Tendras 2 oportunidades para acertar</p>
          </div>
          <Series 
           setIsOpen={(state)=> setIsOpen(state)}
           setFailed={(state)=> setFailed(state)}
          />
        </div>
      </div>
    </Layout>
  )
}

export default House;