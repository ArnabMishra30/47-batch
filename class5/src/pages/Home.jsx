import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            <nav>
                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/about">About</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Home