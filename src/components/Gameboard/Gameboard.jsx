import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './GameBoard.scss';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

export default function GameBoard() {
  const images = [
    './assets/image1.png',
    './assets/image2.png',
    './assets/image3.png',
    './assets/image4.png',
    './assets/image5.png',
    './assets/image6.png',
  ];

  const [cards, setCards] = useState([...images, ...images]); // Duplicate each image to have pairs
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // Shuffle cards on initial load
  useEffect(() => {
    setCards((currentCards) => {
      shuffleArray(currentCards);
      return [...currentCards];
    });
  }, []);

  const handleClick = (index) => {
    if (flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }
    const newFlippedCards = [...flippedCards, index];
    if (newFlippedCards.length === 2) {
      const firstIndex = newFlippedCards[0];
      const secondIndex = newFlippedCards[1];
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1500); // The cards flips back after 1s
      }
    } else {
      // if only one card is flipped
      setFlippedCards(newFlippedCards);
    }
  };

  return (
    <div
      className="game-board"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '1080px',
        margin: 'auto',
      }}
    >
      {cards.map((image, index) => (
        <Card
          key={index}
          image={image}
          isFlipped={
            flippedCards.includes(index) || matchedCards.includes(index)
          }
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
