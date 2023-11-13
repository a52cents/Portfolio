import React from 'react'
import './Skills.css'
import {csslogo, htmllogo, jslogo, mysqllogo, nodejslogo, phplogo, reactlogo, reactnativelogo} from '../../assets'
const Skills = () => {

  const cards = [
    {
      title: "HTML",
      img: htmllogo,
    },
    {
      title: "REACT",
      img: reactlogo,
    },
    {
      title: "REACTNATIVE",
      img: reactnativelogo,
    },
    {
      title: "CSS",
      img: csslogo,
    },
    {
      title: "JAVASCRIPT",
      img: jslogo,
    },
  ]
  const cards2 = [
    {
      title: "NodeJS",
      img: nodejslogo,
    },
    {
      title: "PHP",
      img: phplogo,
    },
    {
      title: "MySQL",
      img: mysqllogo,
    },
    
  ]

  return (
    <section id="skills">
      <div className="wrapper">
          <h1>Skills / Outils</h1>
          <h2>Front-end :</h2>
        <div className="content-container">
          
          {cards.map((card, index) => (
            <div
              key={index}
              className="card-wrapper"
            >
              <div className="card">
                <div className={"content-card-front"}>
                  <p>{card.title}</p>
                  <img src={card.img} alt='{card.title}'/>
                </div>
                <div className="content-card-back">
                  <p>{card.back_content}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
          <h2>Back-end :</h2>
          <div className="content-container2">
          
          {cards2.map((card, index) => (
            <div
              key={index}
              className="card-wrapper"
            >
              <div className="card">
                <div className={"content-card-front"}>
                  <p>{card.title}</p>
                  <img src={card.img} alt='{card.title}'/>
                </div>
                <div className="content-card-back">
                  <p>{card.back_content}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
