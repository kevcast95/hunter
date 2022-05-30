import React, { useState, useEffect } from "react";
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'

import harry from '../../assets/harry.png'
import hogwart from '../../assets/hogwart.png'
import reliquias from '../../assets/reliquias.png'
import nueve from '../../assets/nueve.png'

import './Series.scss'

function Series({ setIsOpen, setFailed }) {
  const correct = ['10','9']
  const [answer, setAnswer] = useState({
    ms1: '',
    ms2: ''
  })
  useEffect(() => {
  if (answer.ms1.length > 0 && answer.ms2.length > 0) {
    if (answer.ms1 === correct[0] && answer.ms2 === correct[1]) {
      setFailed(false)
    }else {
      setFailed(true)
      setTimeout(() => {
        setIsOpen(false)
        setFailed(false)
        setAnswer({
          ms1: '',
          ms2: ''
        })
      },3200)
    }
    setIsOpen(true)
  }
  },[answer])

  return (
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
        <input 
          type="text" 
          name="ms1" 
          placeholder="?"
          value={answer.ms1}
          autocomplete="false"
          onChange={(e)=> setAnswer({...answer, [e.target.name]: e.target.value})} 
        />
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
          <input 
            type="text" 
            name="ms2" 
            placeholder="?"
            value={answer.ms2}
            autocomplete="false"
            onChange={(e)=> setAnswer({...answer,  [e.target.name]: e.target.value})} 
          />
        </span>
        <p className="series-hide">0</p>
      </div>
    </div>
  )
}

export default Series;