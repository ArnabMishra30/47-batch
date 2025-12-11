import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("Component Mounted ");
    fetchData();
    return () => {
      console.log("Cleanup before unmount (componentWillUnmount) 🧹");
    };
  }, []);

  useEffect(() => {
    console.log(`Component Updated 🔁 Count changed: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log("Every render including first ");
  });

  const fetchData = () => {
    console.log("Fetching API data...");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase Count
      </button>

      <button onClick={() => setToggle(prev => !prev)}>
        Toggle Something
      </button>

      {toggle && <p>This will unmount when toggle is off</p>}
    </div>
  );
}

export default App;

// component mount -> component didupdate -> component will unmount