import { useState } from "react";

function LiveInput() {
  // Step 1: Create a state variable to store input text
  const [text, setText] = useState("");

  // Step 2: Update state whenever input changes
  function handleChange(event) {
    setText(event.target.value);
  }

  // Step 3: Display both input and live output
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>📝 Type Something Below</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <h3 style={{ marginTop: "15px" }}>
        Live Preview: <span style={{ color: "blue" }}>{text}</span>
      </h3>
    </div>
  );
}

export default LiveInput;
