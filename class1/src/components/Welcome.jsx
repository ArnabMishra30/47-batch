// import React from 'react'
// function Welcome(props) {
//     return (
//         <>
//             <h1 style={{color: "red"}}>Welcome {props.name}</h1>
//             <h2 style={{color: "blue"}}>Your id is {props.id}</h2>
//         </>
//     )
// }
// export default Welcome


function Welcome({name, id}) {
    return (
        <>
            <h1 style={{color: "red"}}>Welcome {name}</h1>
            <h2 style={{color: "blue"}}>Your id is {id}</h2>
        </>
    )
}
export default Welcome