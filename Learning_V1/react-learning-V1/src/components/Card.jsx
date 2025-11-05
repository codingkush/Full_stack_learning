import React from 'react'

const Card = ({title,description,image}) => {
  return (
     <div style={styles.card}>
          {image && <img src={image} alt={title} style={styles.image}/>}
          <h3>{title}</h3>
          <p>{description}</p>
     </div>
  )
};

const styles = {
    card: {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default Card