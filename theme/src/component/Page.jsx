import React from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

//use the context
function Page() {
    const { theme, setTheme } = useContext(ThemeContext)
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
            <button onClick={()=>{setTheme(theme === "light" ? "dark" : "light")}} style={{ backgroundColor: "green", color: "black", border: "white", padding: "10px 20px", cursor: "pointer" }}>Switch Theme</button>
        </div>
    )
}

export default Page