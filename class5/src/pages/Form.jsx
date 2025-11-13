// // import React, { useState } from "react";
// // import "./Form.css";

// // function Form() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [age, setAge] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault(); // prevent page reload
// //     alert(`Welcome ${name}, your age is ${age}.`);
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white p-6 rounded-2xl shadow-md w-80 flex flex-col gap-4"
// //       >
// //         <h2 className="text-xl font-semibold text-center">User Form</h2>

// //         <input
// //           type="text"
// //           placeholder="Enter your name"
// //           className="border p-2 rounded"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />
// //         <br />
// //         <br />

// //         <input
// //           type="email"
// //           placeholder="Enter your email"
// //           className="border p-2 rounded"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />

// //         <br />
// //         <br />

// //         <input
// //           type="number"
// //           placeholder="Enter your age"
// //           className="border p-2 rounded"
// //           value={age}
// //           onChange={(e) => setAge(e.target.value)}
// //           required
// //         />

// //         <br />
// //         <br />

// //         <button
// //           type="submit"
// //           className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600"
// //         >
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Form;


// import React, { useState } from "react";

// function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");

//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     alert(`Signed in as ${email}`);
//   };

//   // Inline CSS styles as JS objects
//   const containerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     backgroundColor: "#f3f3f3",
//   };

//   const formStyle = {
//     backgroundColor: "#fff",
//     padding: "25px 30px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     width: "320px",
//     textAlign: "center",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     margin: "8px 0",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     fontSize: "14px",
//     outline: "none",
//   };

//   const buttonStyle = {
//     width: "100%",
//     padding: "10px",
//     marginTop: "12px",
//     backgroundColor: "#4a90e2",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "16px",
//     cursor: "pointer",
//   };

//   return (
//     <div style={containerStyle}>
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <h2 style={{ color: "#333", marginBottom: "20px" }}>User Form</h2>

//         <input
//           type="text"
//           placeholder="Enter your name"
//           style={inputStyle}
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <input
//           type="email"
//           placeholder="Enter your email"
//           style={inputStyle}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="number"
//           placeholder="Enter your age"
//           style={inputStyle}
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           style={buttonStyle}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab8")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
//         >
//           Submit
//         </button>
//       </form>
//       {submitted && (
//         <p className="mt-4 text-lg font-medium text-gray-800">
//           Welcome {name}, your age is {age}.
//         </p>
//       )}
//     </div>
//   );
// }

// export default Form;


import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, reset } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    alert(`Signed in as ${data.email}`);
    setSubmittedData(data);
    reset(); // clear inputs after submit
  };

  // Inline CSS styles as JS objects
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f3f3f3",
    flexDirection: "column",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "25px 30px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "320px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    backgroundColor: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <h2 style={{ color: "#333", marginBottom: "20px" }}>User Form</h2>

        <input
          type="text"
          placeholder="Enter your name"
          style={inputStyle}
          {...register("name", { required: true })}
        />

        <input
          type="email"
          placeholder="Enter your email"
          style={inputStyle}
          {...register("email", { required: true })}
        />

        <input
          type="number"
          placeholder="Enter your age"
          style={inputStyle}
          {...register("age", { required: true })}
        />

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "500",
            color: "#333",
          }}
        >
          Welcome {submittedData.name}, your age is {submittedData.age}.
        </p>
      )}
    </div>
  );
}

export default Form;
