import React, { useState } from 'react'
import { useForm } from "react-hook-form"

function ReactForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },//errros stores the error coming from each field in an array
    } = useForm()

    const submission = (data) => console.log(data)

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(submission)}>
                <input type="text" name='name' placeholder='Enter your Name' {...register("name")} />
                <br /><br />
                <input type="email" name='email' placeholder='Enter your Email' {...register("email", { required: true })} />
                <br /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default ReactForm