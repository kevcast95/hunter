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