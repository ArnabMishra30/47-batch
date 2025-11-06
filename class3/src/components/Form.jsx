// import React, { useState } from 'react'

// function Form() {

//     const [formdata, setFormdata] = useState({
//         name: "",
//         email: "",
//         age: ""
//     })

//     function handleChange(e) {
//         const{name, value} = e.target;
//         setFormdata((prev)=>({
//             ...prev,
//             [name]: value
//         }))
//     }

//     function handleSubmit (e){
//         e.preventDefault()
//         console.log("User is : ", formdata);
//     }

//   return (
//     <div style={{textAlign: "center", marginTop:"40px"}}>
//         <h2>Registration Form</h2>
//         <form onSubmit={handleSubmit}>
//             <input type="text" name='name' placeholder='Enter your Name' onChange={handleChange}/>
//             <br /><br />
//             <input type="email" name='email' placeholder='Enter your Email' onChange={handleChange}/>
//             <br /><br />
//             <input type="number" name='age' placeholder='Enter your Age' onChange={handleChange}/>
//             <br /><br />
//             <button type='submit' >Submit</button>
//         </form>
//         <h3>preview</h3>
//         <pre>{JSON.stringify(formdata, undefined, 2)}</pre>
//     </div>
//   )
// }

// export default Form