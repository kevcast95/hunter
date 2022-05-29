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