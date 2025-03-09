import React from 'react';
import './CardStyles.css';

function Cards({ heading, data }) {
  // First 4 cards for the first row
  const firstRowCards = data.slice(0, 4);
  // Remaining cards for the second row
  const secondRowCards = data.slice(4); // Include all cards from index 4 onward

  return (
    <div className="cards-wrapper">
      <h1 className="page-title">Team Track Services</h1>
      
      {/* First row with 4 cards */}
      <div className="container">
        {firstRowCards.map((card) => (
          <div className="card child" key={card.id}>
            {heading.includes('image') && card.image && (
              <div className="image-container">
                <img src={card.image} alt={card.title || 'Feature image'} />
              </div>
            )}
            
            <div className="card-content">
              {heading.includes('title') && (
                <h3 className="card-title">{card.title}</h3>
              )}
              
              {heading.includes('description') && (
                <p className="card-description">{card.description}</p>
              )}
              
              {heading
                .filter(key => !['image', 'id', 'title', 'description'].includes(key))
                .map((key) => (
                  <div className="card-extra-info" key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {card[key]}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Second row with remaining cards */}
      <div className="container second-row-container">
        {secondRowCards.map((card) => (
          <div className="card child second-row" key={card.id}>
            {heading.includes('image') && card.image && (
              <div className="image-container">
                <img src={card.image} alt={card.title || 'Feature image'} />
              </div>
            )}
            
            <div className="card-content">
              {heading.includes('title') && (
                <h3 className="card-title">{card.title}</h3>
              )}
              
              {heading.includes('description') && (
                <p className="card-description">{card.description}</p>
              )}
              
              {heading
                .filter(key => !['image', 'id', 'title', 'description'].includes(key))
                .map((key) => (
                  <div className="card-extra-info" key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {card[key]}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
