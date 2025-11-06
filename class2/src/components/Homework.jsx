import React, { useState } from 'react'
function Homework() {
    const [nam, setNam] = useState("Guest")
  return (
    <div style={{textAlign: "center"}}>
        <h1>Your name is {nam}</h1>
        <button onClick={()=>setNam("Arnab")}>click me</button>
    </div>
  )
}
export default Homework