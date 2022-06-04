import React, { useState } from "react";

import Memory from "../../components/Memory";
import Layout from "../../components/Layout";

import img from '../../assets/second.png'
import smk3 from '../../assets/smk3.png'

import './Collar.scss'

function Collar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Layout 
      picture={img} 
      stop={1} 
      route={'/second'} 
      location={'https://www.google.com.co/maps/place/Cancha+de+Voleibol+Playa/@11.0179394,-74.791315,19z/data=!3m1!4b1!4m5!3m4!1s0x8ef42d37b04ede7b:0xd858ef7671d05397!8m2!3d11.0179381!4d-74.7907678?hl=es&authuser=0'}
      isOpen={isOpen}
    >
      <div className="collar">
        <div className="collar-content">
          <img className="collar-smoke" src={smk3} alt="smoke" />
          <div className="cake-guide">
            ENCUENTRA LAS PAREJAS
          </div>
          <Memory
            setIsOpen={()=> setIsOpen(true)}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Collar;