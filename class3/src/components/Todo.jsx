// import React from 'react'
// import { useState } from 'react'

// function Todo() {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(name);
//         console.log(email);

//         setName("")
//         setEmail("")
//     }

//   return (
//     <div style={{textAlign: "center", marginTop: "50px"}}>
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder='Enter Your name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
//             <br />
//             <br />
//             <input type="text" placeholder='Enter Your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
//             <br />
//             <br />
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Todo


import React from 'react'
import { useState } from 'react'

function Todo() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);

        setName("")
        setEmail("")
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your name' value={name} onChange={(e) => { setName(e.target.value); console.log(e.target.value);
                 }} />
                <br />
                <br />
                <input type="text" placeholder='Enter Your email' value={email} onChange={(e) => { setEmail(e.target.value); console.log(e.target.value) }} />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Todo