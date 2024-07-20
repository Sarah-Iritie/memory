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
  const [isLocked, setIsLocked] = useState(false);

  // Shuffle cards on initial load
  useEffect(() => {
    setCards((currentCards) => {
      shuffleArray(currentCards);
      return [...currentCards];
    });
  }, []);

  const handleClick = (index) => {
    if (
      isLocked ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return; // Ignore clicks if gameboard is locked or card is already flipped or matched
    }

    const newFlippedCards = [...flippedCards, index];

    if (newFlippedCards.length === 2) {
      setIsLocked(true); // Lock the gameboard when both cards are flipped
      setFlippedCards(newFlippedCards); // Updates the state to flip both cards

      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setTimeout(() => {
          setMatchedCards([...matchedCards, firstIndex, secondIndex]);
          setFlippedCards([]);
          setIsLocked(false);
        }, 500); // short delay before matching cards and resetting
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setIsLocked(false);
        }, 1500); // If the cards do not match, flip back after 1.5s
      }
    } else {
      // if only one card is flipped
      setTimeout(() => {
        setFlippedCards(newFlippedCards);
      }, 100);
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
