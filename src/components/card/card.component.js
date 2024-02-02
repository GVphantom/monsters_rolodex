import "./card.style.css";

export const Card = ({ monster }) => (
  <div className="card-container">
    <h2>{monster.name}</h2>
    <img
      src={`https://robohash.org/id=${monster.id}?set=set2&size=180x180`}
      alt="something"
    />
  </div>
);
