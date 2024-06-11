import './GameBoard.scss';
import Card from '../Card/Card';

export default function GameBoard() {
  const images = [
    './assets/image1.png',
    './assets/image2.png',
    './assets/image3.png',
    './assets/image4.png',
    './assets/image5.png',
    './assets/image6.png',
  ];

  const cardImages = [...images, ...images]; //Duplicates each image to have pairs

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '1080px',
        margin: 'auto',
      }}
    >
      {cardImages.map((image, index) => (
        <Card
          key={index}
          image={image}
          onClick={() => console.log(`Card clicked: ${index}`)}
        />
      ))}
    </div>
  );
}
