import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";

import img from '../../assets/frist.jpg'
import smk3 from '../../assets/smk3.png'
import smk1 from '../../assets/smk1.png'

import './Welcome.scss'

function Welcome() {
  return (
    <Layout picture={img} stop={0}>
      <div className="welcome">
        <div className="welcome-content">
          <img className="welcome-smoke" src={smk3} alt="smoke" />
          <img className="welcome-smoke1" src={smk1} alt="smoke" />
          <h1 className="welcome-title1">¡Bienvenida!</h1>
          <h1>
            A una aventura llena de retos y misterios
          </h1>
          <p>
            A continuación encontraras retos que tendrás que resolver
          </p>
          <p>
            Cada reto traza la ruta que deberás seguir para encontrar el tesoro
          </p>
          <Link to="/first" className="welcome-start">
            Empezar
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Welcome;