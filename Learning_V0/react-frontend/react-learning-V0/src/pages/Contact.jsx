import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const [serverMsg, setServerMsg] = useState(""); // to display message from backend


    //used fetch api to fetch data from backend and send data -------------------------------------------------------------------------------->

    // Fetch initial message when component mounts
    // useEffect(() => {
    //     fetch("http://localhost:8080/api/contact")
    //         .then(res => res.json())
    //         .then(data => setServerMsg(data.message))
    //         .catch(err => console.error("Error:", err));
    // }, []);

    //now using  axios 

    //  Fetch initial message (GET)
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/contact")
      .then(res => setServerMsg(res.data.message))
      .catch(err => console.error("Error:", err));
  }, []);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     fetch("http://localhost:8080/api/contact", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(formData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log("Server response:", data);
    //             alert("Message sent successfully!");
    //             setServerMsg(data.responseMessage); // update message after sending
    //         })
    //         .catch(err => console.error("Error:", err));
    // };


    //using axios 

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios
      .post("http://localhost:8080/api/contact", formData) // no need for stringify or headers
      .then(res => {
        console.log("Server response:", res.data);
        alert("Message sent successfully!");
        setServerMsg(res.data.responseMessage);
      })
      .catch(err => console.error("Error:", err));
    }

    return (
        <div>
            <h2>Contact Us</h2>

            {/* Display message from backend */}
            {serverMsg && <p>{serverMsg}</p>}

            <form onSubmit={handleSubmit}>
                Full Name: 
                <br />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                /><br />
                <br />

                Email: 
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                /><br />
                <br />
                
                Message:
                <br />
                <textarea
                    name="message"
                    placeholder="Enter message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea><br />
                <br />

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact