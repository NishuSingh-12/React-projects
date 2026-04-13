function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  );
}
export default Card;
