import React, { useEffect, useState } from 'react'

const About = () => {
    const [message,  setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/about",{
            method:"GET",
            headers:{
                "Accept":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => setMessage(data.message))
        .catch(err => console.error("Error: ",err));
    },[]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>About Page</h1>
      <p>{message}</p>
    </div>
  )
}

export default About