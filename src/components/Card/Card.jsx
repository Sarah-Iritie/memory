import './Card.scss';

export default function Card({ image, onClick }) {
  return (
    <div className="card-container" onClick={onClick}>
      <img src={image} alt="memory card" />
    </div>
  );
}
