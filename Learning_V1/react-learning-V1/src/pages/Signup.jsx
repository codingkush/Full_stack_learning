import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [form,setForm] = useState({name:"",email:"",password:""});
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        const res = await fetch("http://localhost:8080/api/signup",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(form),
        })

        if(!res.ok) throw new Error("Signup failed!");

        alert("Signup successful!");
        navigate("/signin");
    }
    catch(err){
        console.err(err);
        alert("Something went wrong.Please try again.");
    }
  };

  return (
     <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup