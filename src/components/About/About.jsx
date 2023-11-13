import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };



  const cards = [
    {
      title: "Qui suis-je ?",
      content: "Je suis un jeune développeur full-stack en herbe et j'aime constamment apprendre de nouvelles choses.",
      back_content:"Je suis un jeune développeur full-stack en devenir, passionné par la création et l'apprentissage continu. Mon parcours m'a amené à explorer un large éventail de technologies, mais une chose est constante : mon désir d'acquérir de nouvelles compétences et de relever de nouveaux défis."
    },
    {
      title: "Mon âge ?",
      content: "Je vais tout juste avoir 22 ans et je suis passionné par le code depuis environ 3 à 4 ans.",
      back_content:" À 22 ans, j'ai toujours été passionné par la création, que ce soit des vidéos YouTube, des animations en 3D ou des jeux vidéo. Mais il y a quelque chose de spécial à partir d'une page web blanche et à la transformer en quelque chose de unique, de beau et de fonctionnel. C'est cette fascination pour le développement web qui m'inspire."
    },
    {
      title: "Mon activité ?",
      content: "Je suis actuellement en deuxième année de BTS Systèmes numériques, option Informatique et Réseaux. J'aspire à devenir développeur full-stack.",
      back_content:"Titulaire d'un bac scientifique en sciences de l'ingénieur, j'ai trouvé ma voie dans le BTS Systèmes numériques, option Informatique et Réseaux. J'ai beaucoup apprécié l'opportunité d'approfondir mes connaissances, que ce soit en classe ou par mes propres efforts en autodidacte."
    },
    {
      title: "Mes passions ?",
      content: "Je passe une partie de mon temps à travailler sur de petits projets, à jouer aux jeux vidéos et même parfois à coder mes propres jeux !",
      back_content:"Je suis un passionné de jeux vidéo depuis de nombreuses années. Minecraft, Assassin's Creed, Rocket League... ces titres ont façonné ma passion. Les jeux ne sont pas seulement un passe-temps, mais une source d'inspiration constante et de créativité pour moi."
    },
    {
      title: "Mes motivations?",
      content: "J'apprécie énormément voir l'évolution d'un projet. Je trouve cela incroyable de pouvoir réaliser tant de choses avec de simples lignes de code.",
      back_content:"Je suis toujours avide d'apprendre. Je passe mon temps à explorer le web, à découvrir de nouvelles technologies et à regarder comment d'autres développeurs travaillent sur YouTube. Cette quête d'inspiration et de connaissance me pousse à progresser en tant que développeur."
    },
    
  ];

  return (
    <section id="topics">
      <div className="wrapper">
        <h1>A propos</h1>
        <h2>(Cliquez sur les cartes !)</h2>
        <div className="container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-wrapper ${index === activeCard ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card">
                <div className={"content-card-front"}>
                  <p>{card.title}</p>
                  <span>{card.content}</span>
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
  );
};

export default About;
