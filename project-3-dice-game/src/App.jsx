import { useState } from "react";
import PlayGame from "./components/PlayGame";
import StartGame from "./components/StartGame";

function App() {
  const [show, setShow] = useState(false);
  return (
    <main className=".container">
      {show ? <PlayGame /> : <StartGame startGame={() => setShow(true)} />}
    </main>
  );
}

export default App;
