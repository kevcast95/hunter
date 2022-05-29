import React, { useState, useEffect } from "react";
import { imgMemory } from './constant'

import './Memory.scss'

function Memory({ setIsOpen }) {
  const [doMatch, setDoMatch] = useState([])
  const [listMatch, setListMatch] = useState([])

  useEffect(() => {
    if (listMatch.length === 6) {
      setTimeout(()=>{
        setIsOpen()
      },500)
    }
  },[listMatch])

  function checkImg(id, idMatch) {
    if (doMatch[0] === id) {
      return
    }
    const img = document.getElementById(id)
    if (doMatch.length <=0) {
      setDoMatch([id, idMatch])
      img.style.animation = "flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
    } else if(idMatch === doMatch[1]) {
      setDoMatch([])
      img.style.animation = "flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
      setListMatch([...listMatch,idMatch])
      return
    } else {
      img.style.animation = "flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
      const img1 = document.getElementById(doMatch[0])
      setTimeout(()=>{
        img1.style.animation = "flip-horizontal-reverse 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
        img.style.animation = "flip-horizontal-reverse 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
        setDoMatch([])
      },500)
    }
  }

  return (
   <div className="memory">
     {
       imgMemory.map((item, index) => (
         <div 
          key={`pic${index}`} 
          className="memory-img_container" 
          id={`pic${index}`}
          onClick={
            !listMatch.includes(item.idMatch)? ()=> checkImg(`pic${index}`, item.idMatch):
            null
          }
        > 
           <span className="memory-back">
             Encuentrame
           </span>
           <img src={item.img} alt={item.img} className="memory-img  content" />
         </div>
       ))
     }
   </div>
  )
}

export default Memory;