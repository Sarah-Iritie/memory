import './Card.scss';

export default function Card({ image, onClick, isFlipped }) {
  return (
    <div className="card-container" onClick={onClick}>
      {isFlipped ? (
        <img src={image} alt="memory card" className="card-img" />
      ) : (
        <div className="card-back"></div>
      )}
    </div>
  );
}
