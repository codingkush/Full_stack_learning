import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = ({setUser}) => {

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name] : e.target.value,
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        const res = await fetch("http://localhost:8080/api/signin",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(form),
        });

        const data = await res.json();
        setUser(data.user);
        navigate("/");
    }
    catch(err){
        alert('/Login failed');
    }
  };

  return (
     <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Signin