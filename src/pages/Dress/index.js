import React, { useState, useEffect } from "react";
import { questions } from "./constants";

import Layout from "../../components/Layout";

import img from '../../assets/third.jpg'
import smk3 from '../../assets/smk3.png'

import './Dress.scss'

function Dress() {
  const [isOpen, setIsOpen] = useState(false)
  const [questionPos, setQuestionPos] = useState(0)
  const [flag, setFlag] = useState(false)
  const [answers, setAnswers] = useState([])
  let correct = answers.filter((ans) => !!ans).length
 
  useEffect(() => {
    if (answers.length === 5) {
      setIsOpen(true)
    }
    if (answers.length === 5 && correct < 3) {
      setTimeout(() => {
        setIsOpen(false)
        setQuestionPos(0)
        setAnswers([])
      }, 3200)
    }
  }, [answers])
  
  function handleAnswer (idx,anState) {
    setFlag(true)
    setTimeout(() => {
      setQuestionPos(idx + 1)
      setAnswers([...answers, anState])
      setFlag(false)
    }, 1500)
  }

  const Questions = () => {
    return (
      <>
        {questions.map((question, idx) => {
          return (
            <>
              {questionPos === idx &&
                <div className="questions" key={idx}>
                  <h1>{question.question}</h1>
                  <ul className="questions-answer_list">
                    <li
                      onClick={()=> handleAnswer(idx, question.ans1.correct)}
                    > 
                      <span>
                        {!flag &&
                          "A"
                        }
                        {(flag && question.ans1.correct)  &&
                          '✓'
                        }
                         {(flag && !question.ans1.correct)  &&
                          'X'
                        }
                        </span> 
                      {question.ans1.opt} 
                    </li>
                    <li
                      onClick={()=> handleAnswer(idx, question.ans2.correct)}
                    > 
                      <span>
                        {!flag &&
                          "B"
                        }
                        {(flag && question.ans2.correct)  &&
                          '✓'
                        }
                         {(flag && !question.ans2.correct)  &&
                          'X'
                        }
                        </span>  
                      {question.ans2.opt} 
                    </li>
                    <li
                      onClick={()=> handleAnswer(idx, question.ans3.correct)}
                    > 
                      <span>
                        {!flag &&
                          "C"
                        }
                        {(flag && question.ans3.correct)  &&
                          '✓'
                        }
                         {(flag && !question.ans3.correct)  &&
                          'X'
                        }
                        </span>  
                      {question.ans3.opt} 
                    </li>
                    <li
                      onClick={()=> handleAnswer(idx, question.ans4.correct)}
                    > 
                      <span>
                        {!flag &&
                          "D"
                        }
                        {(flag && question.ans4.correct)  &&
                          '✓'
                        }
                         {(flag && !question.ans4.correct)  &&
                          'X'
                        }
                        </span> 
                      {question.ans4.opt} 
                    </li>
                  </ul>
                </div>

              }
            </>
          )
        })

        }
      </>
    )
  }

  return (
    <Layout picture={img}
      stop={2}
      route={'/third'}
      isOpen={isOpen}
      text={correct < 3 ? 'Lo siento has perdido, intenta de nuevo': null}
    >
      <div className="dress">
        <div className="dress-content">
          <img className="dress-smoke" src={smk3} alt="smoke" />
          <div className="dress-guide">
            PROBEMOS TUS CONOCIMIENTOS
            <p>Para este reto tendras que responder al menos 2 de 3 preguntas</p>
            <p>Tendras 2 oportunidades para acertar</p>
          </div>
          {Questions()}
        </div>
      </div>
    </Layout>
  )
}

export default Dress;