import React, { useEffect ,useState } from 'react'
import Loading from '../components/Loading';

const Testimonials = () => {

  const [testimonials , setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () =>{
        try{
            const res = await fetch("http://localhost:8080/api/testimonials");
            const data = await res.json();
            setTestimonials(data);
        }
        catch(err){
            console.error("Error: ",err);
        }
        finally{
            setLoading(false);
        }
    };
    loadTestimonials();
  },[]);

  if(loading) return <Loading/>;

  return (
    <div>
        <h2>Testimonials</h2>
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            {testimonials.length>0 ? (
                testimonials.map((t,idx) => (
                    <div key={idx} style={{border:"10px solid #7a2c2cff",padding:"10px",width:"250px"}}>
                        <h4>{t.name}</h4>
                        <p>{t.feedback}</p>
                    </div>
                ))
            ) : (
                <p>No testimonials yet. </p>
            )
        }
        </div>
    </div>
  )
}

export default Testimonials