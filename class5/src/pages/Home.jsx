import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form.jsx'

function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            {/* <nav>
                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/about">About</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="contact">Contact</Link>
            </nav> */}
            <Form/>
        </div>
    )
}

export default Home