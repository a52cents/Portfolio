import React from 'react'
import './Projects.css'

const Projects = () => {
  const cards = [
    {
      title: "CRUD/API",
      
    }]
  return (
    <section id="project">
      <div className="wrapper">
        <h1>Mes Projets</h1>
        <h2></h2>
        <h3>Simple CRUD/API website</h3>
        <div className="content-container">
          
          {cards.map((card, index) => (
            <div key={index} className="card-wrapper">
              <div className="card">
                <div className={"content-card-front"}>
                  <p>{card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
