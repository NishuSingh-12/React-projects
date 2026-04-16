import "./App.css";
import MoodBoardItem from "./components/MoodBoardItem";
function App() {
  return (
    <>
      <h1 className="heading">Destination Mood Board</h1>
      <div className="flex-container">
        <MoodBoardItem />
      </div>
    </>
  );
}
export default App;
