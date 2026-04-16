function MoodBoardItem({ image, color, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img src={image} alt="img" />
      <h3>{description}</h3>
    </div>
  );
}

export default MoodBoardItem;
