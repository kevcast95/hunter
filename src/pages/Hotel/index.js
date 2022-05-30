import React, { useState, useEffect } from "react";
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import Layout from "../../components/Layout";

import img from '../../assets/sixth.jpg'
import smk1 from '../../assets/smk1.png'

import './Hotel.scss'

function Hotel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Layout picture={img}
      stop={5}
      route={'/'}
      location={'https://www.google.com.co/maps/place/Eco+Xata/@10.8741884,-75.1007439,15z/data=!4m18!1m9!3m8!1s0x8ef67b3967182953:0x64214ac9414ffbad!2sEco+Xata!5m2!4m1!1i2!8m2!3d10.8741942!4d-75.0919909!3m7!1s0x8ef67b3967182953:0x64214ac9414ffbad!5m2!4m1!1i2!8m2!3d10.8741942!4d-75.0919909?hl=es&authuser=0'}
      isOpen={isOpen}
    >
      <div className="hotel">
      <img className="hotel-smoke" src={smk1} alt="smoke" />
        <div className="hotel-content">
          <div className="house-guide">
            ¿QUÉ TAL UN ROMPECABEZAS?
            <p>¿Cuanto tardarás en descubir la imagen?</p>
          </div>
          <JigsawPuzzle
            imageSrc='https://images2.alphacoders.com/639/thumb-1920-639805.jpg'
            rows={3}
            columns={4}
            onSolved={() => setIsOpen(true)}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Hotel;