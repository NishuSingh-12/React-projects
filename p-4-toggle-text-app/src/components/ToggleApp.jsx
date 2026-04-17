import { useState } from "react";

function ToggleApp() {
  const [isVisible, setIsVisible] = useState(false);
  const handleToglleText = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div id="toggle-container">
      <button onClick={handleToglleText} id="toggle-btn">
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p id="message">I Love React!</p>}
    </div>
  );
}

export default ToggleApp;
