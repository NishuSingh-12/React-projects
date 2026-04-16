import "./App.css";
import MoodBoardItem from "./components/MoodBoardItem";
function App() {
  const datas = [
    {
      id: 1,
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      color: "red",
      description: "Caribbean",
    },
    {
      id: 2,
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      color: "blue",
      description: "Gawadar Beach",
    },
    {
      id: 3,
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      color: "cyan",
      description: "Cape Town",
    },
    {
      id: 4,
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      color: "pink",
      description: "Suez Canal",
    },
    {
      id: 5,
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      color: "orange",
      description: "Santorini",
    },
    {
      id: 6,
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      color: "black",
      description: "Istanbul",
    },
  ];
  return (
    <>
      <h1 className="heading">Destination Mood Board</h1>
      <div className="flex-container">
        {datas.map((data) => (
          <MoodBoardItem
            image={data.image}
            color={data.color}
            description={data.description}
          />
        ))}
      </div>
    </>
  );
}
export default App;
