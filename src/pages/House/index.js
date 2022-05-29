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