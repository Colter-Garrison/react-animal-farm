import './AnimalCard.css';

export default function AnimalCard({ name, saying, type }) {
  return (
    <div className='animal-card'>
      <h1>{name}</h1>
      <p>{saying}</p>
      <img alt={name} src={`${process.env.PUBLIC_URL}/images/${type}.svg`} />
    </div>
  );
}