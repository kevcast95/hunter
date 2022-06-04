import React, { useState, useEffect } from "react"
import { abc, word1 } from "./constants"

import hang2 from "../../assets/hang_happy.png"
import hang3 from "../../assets/hang_worry.png"
import hang4 from "../../assets/hang_cry.png"

import "./Complete.scss"

function Complete( { setIsOpen, setFailed }) {
  const [usedLetter, setUsedLetter] = useState([]) 
  const [letterCheck, setLetterCheck] = useState([])
  const [progress, setProgress] = useState(0)
  const [hangImg, setHangImg] = useState(hang2)
  const wordReduced = word1.filter((wrd) => wrd !== '-')
  const lengthWord = wordReduced.length
  const containsAll = wordReduced.every(element => {
    return letterCheck.includes(element);
  });
  
  useEffect(() => {
    const progressBar = 100 - (usedLetter.length / (lengthWord + 2)) * 100
    if (progressBar < 65) {
      setHangImg(hang3)
    }
    if (progressBar < 30) {
      setHangImg(hang4)
    }
    if (!containsAll && progressBar === 0) {
      setIsOpen(true)
      setFailed(true)
      setTimeout(() => {
        setIsOpen(false)
        setHangImg(hang2)
        setProgress(0)
        setLetterCheck([])
        setUsedLetter([])
      },3200)
    }
    setProgress(progressBar)
  },[usedLetter])

  useEffect(() => {
    if (containsAll) {
      setHangImg(hang2)
      setTimeout(() => {
        setIsOpen(true)
        setFailed(false)
      },700)
    }
  },[letterCheck])

  function findingWord(ltr) {
    if(!usedLetter.includes(ltr)) {setUsedLetter([...usedLetter,ltr])}
    if(word1.includes(ltr)) {
      setLetterCheck([...letterCheck,ltr])
    }
  }

  return(
    <div className="complete">
       <div className="progress">
          <div>
            <p>Intentos restantes</p>
            <div className="progress-bar_external">
              <div style={{width: `${progress}%`}} className="progress-bar"></div>
            </div>
          </div>
          <img src={hangImg} alt="hang-man"/>
        </div>
      <div className="complete-letters-container">
        {
          word1.map((ltr,index)=> (
            <span 
              className="complete-letters"
              key={index}
            >
              {(ltr === "-" || usedLetter.includes(ltr)) ? ltr:""}
            </span>
          ))
        }
      </div>
      <div className="complete-abc_container">
        {
          abc.map((ltr,index)=> (
            <span 
              style={
                (usedLetter.includes(ltr) && !word1.includes(ltr)) ?
                {textDecoration:"line-through"}:{}
              }
              className="complete-abc"
              onClick={()=>findingWord(ltr)}
              key={index}
            >
              {ltr.toUpperCase()}
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default Complete