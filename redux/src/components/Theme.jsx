import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/themeSlice';

function Theme() {

  const theme = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch();

  return (
    <div style={{
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>{theme} Mode</h1>
      <button onClick={()=> dispatch(toggleTheme())} style={{ backgroundColor: "green", color: "black", border: "white", padding: "10px 20px", cursor: "pointer" }}>Switch Theme</button>
    </div>
  )
}

export default Theme