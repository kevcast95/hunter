import React, { useState, useEffect } from "react";
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'

import harry from '../../assets/harry.png'
import hogwart from '../../assets/hogwart.png'
import reliquias from '../../assets/reliquias.png'
import nueve from '../../assets/nueve.png'

import './Series.scss'

function Series({ setIsOpen, setFailed }) {
  const correct = ['10', '9']

  function validate() {
    const ms1 = document.getElementById('ms1').textContent
    const ms2 = document.getElementById('ms2').textContent
    if (ms1 === correct[0] && ms2 === correct[1]) {
      setFailed(false)
    } else {
      setFailed(true)
      setTimeout(() => {
        setIsOpen(false)
        setFailed(false)
      }, 3200)
    }
    setIsOpen(true)
  }

  return (
    <>
      <div className="series">
        <div className="series-rows">
          <img className="series-img" src={harry} alt="series-harry" />
          <img className="series-img" src={harry} alt="series-harry" />
          <img className="series-img" src={nueve} alt="series-nueve" />
          =
          <p className="series-results">10</p>
        </div>
        <div className="series-rows">
          <img className="series-img" src={nueve} alt="series-nueve" />
          <img className="series-img" src={reliquias} alt="series-reliquias" />
          <img className="series-img" src={hogwart} alt="series-hogwart" />
          =
          <div 
            className="series-answer" 
            id="ms1"
            contentEditable
          >

          </div>
        </div>
        <div className="series-rows">
          <img className="series-img" src={nueve} alt="series-nueve" />
          <img className="series-img" src={hogwart} alt="series-hogwart" />
          <img className="series-img" src={harry} alt="series-harry" />
          =
          <p className="series-results">9</p>
        </div>
        <div className="series-rows">
          <span className="series-num">=8</span>
          <span className="series-num">=12</span>
          <span className="series-num">
            <div className="series-answer"
              id="ms2"
              contentEditable
            >
            </div>
          </span>
          <p className="series-hide">0</p>
        </div>
      </div>
      <button className="welcome-start" onClick={()=> validate()}>
        Validar
      </button>
    </>
  )
}

export default Series;