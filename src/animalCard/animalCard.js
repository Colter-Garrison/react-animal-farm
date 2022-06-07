import './animalCard.css';

export default function animalCard({ name, saying }) {
  return (
    <div className='animal-card'>
      <h1>{name}</h1>
      <p>{saying}</p>
      <img src={`/images/${name}.svg`} />
    </div>
  );
}