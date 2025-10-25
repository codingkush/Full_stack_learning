import React, { useEffect, useState } from 'react'

const Home = () => {
    const [message,setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/home",{
            method: "GET",
            headers: {
                "Accept":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => setMessage(data.message))
        .catch(err => console.error("Error: ",err));
    },[]);

  return (
     <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  )
}

export default Home