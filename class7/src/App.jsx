//folder -> Context -> file -> UserContext.jsx(Create Context) --- 1st step
import React, { createContext, useContext } from "react";
const UserContext = createContext();

// 2nd step -> Create a provider
function App() {
  const user = {
    name : "Arnab Mishra",
    age: 24
  };
  return (
    <UserContext.Provider value={user}>
      <div style={{ textAlign: "center", marginTop: "50px", color: "black" }}>
        <h1>React Context API Demo</h1>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

function Parent() {
  return (
    <div>
      <Child />
    </div>
  );
}

//3rd step consume the provider
function Child() {
  // const user = useContext(UserContext);
  const {name, age} = useContext(UserContext);
  return <h2>Welcome, {name} 👋, Age is {age}</h2>;
  // return <h2>Welcome, {user.name} 👋, Age is {user.age}</h2>;
}
export default App;