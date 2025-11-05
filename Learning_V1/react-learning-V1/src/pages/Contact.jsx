import React, { useEffect , useState } from 'react'
import Loading from '../components/Loading'

const Contact = () => {

 const[formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
    feedback:""
 });
 
 const [serverMsg, setServerMsg] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/contact");
            const data = await res.json();
            setServerMsg(data.message);

        } catch (err) {
             console.error("Error fetching: ",err);
        }
        finally{
            setLoading(false);
        }
    };
    fetchData();
 },[]);


 const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    });
 }

 const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const res = await fetch('http://localhost:8080/api/contact',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(formData),
        });

        if(!res.ok) throw new Error("Failed to send message");
        alert("Message sent successfully!");
        setFormData({
            name:"",
            email:"",
            message:"",
            feedback:""
        });
    }
    catch(err){
      console.error("Error: ",err);
      alert("Something went wrong!");
    }
 };

 if(loading) return <Loading/>;

  return (
     <div>
      <h2>Contact Us</h2>
      <p>{serverMsg}</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea><br />
        <input type="text" name="feedback" placeholder="Your Feedback" value={formData.feedback} onChange={handleChange} /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact