import React, { useState, useEffect } from "react";
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import Layout from "../../components/Layout";

import img from '../../assets/sixth.jpg'
import smk3 from '../../assets/smk3.png'
import smk1 from '../../assets/smk1.png'

import './Hotel.scss'

function Hotel() {
 

  return (
    <Layout picture={img}
      stop={5}
      route={'/forth'}
      location={'https://www.google.com.co/maps/place/Cra.+19+%2382a-46,+Soledad,+Barranquilla,+Atl%C3%A1ntico/@10.9203777,-74.8198168,17z/data=!3m1!4b1!4m5!3m4!1s0x8ef5d2fa46a2e2b1:0xf4bdbc9efd8df722!8m2!3d10.9203777!4d-74.8176281?hl=es&authuser=0'}
      isOpen={false}
    >
      <div className="hotel">
        <div className="hotel-content">
        <JigsawPuzzle
            imageSrc='https://images2.alphacoders.com/639/thumb-1920-639805.jpg'
            rows={3}
            columns={4}
            onSolved={() => alert('Solved!')}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Hotel;