import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("white");
  return (
    <div style={{ backgroundColor: color }} id="color-picker-container">
      <input
        onChange={(e) => setColor(e.target.value)}
        type="color"
        id="color-input"
      />
    </div>
  );
}

export default ColorPicker;
