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
      location={'https://www.google.com.co/maps/place/Parque+Canino/@11.0194589,-74.7929126,19z/data=!3m1!4b1!4m5!3m4!1s0x8ef42deba77c4593:0x19c049f71a8d7475!8m2!3d11.0194576!4d-74.7923654?hl=es&authuser=0'}
      isOpen={isOpen}
    >
      <div className="collar">
        <div className="collar-content">
          <img className="collar-smoke" src={smk3} alt="smoke" />
          <Memory
            setIsOpen={()=> setIsOpen(true)}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Collar;