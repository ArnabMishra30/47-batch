import React from 'react'

function Welcome() {
    function greet(name){
        alert(`welcome ${name}`)
    }
  return (
    // <div className='welcome'>
    //     <button onClick={alert("I am clicked")}>Click me</button>
    // </div>
    <>
        <button onClick={() => greet("Arnab")}>Click me</button>
    </>
  )
}

export default Welcome


// //Add a link Prop Now, make that button open a specific website when clicked

// // a html page where we have 3 buttons on click in each of them separate websites open

