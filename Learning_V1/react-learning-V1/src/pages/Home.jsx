import React from 'react'
import Card from '../components/Card';

const Home = ({user}) => {

  const cards = [
    {
      title: "Full-Stack Development",
      description: "Learn modern web technologies and build complete apps.",
      image: "https://source.unsplash.com/400x300/?coding",
    },
    {
      title: "AI & Machine Learning",
      description: "Understand intelligent systems and their real-world use.",
      image: "https://source.unsplash.com/400x300/?artificialintelligence",
    },
    {
      title: "Community Projects",
      description: "Work with developers and contribute to open source.",
      image: "https://source.unsplash.com/400x300/?teamwork",
    },
  ];

  return (
    <div>
        <h1>Welcome to Our Website!</h1>
        {user ? <h2>Hello, {user.name}! 👋</h2> : <p>Please sign in to get a personalized experience.</p>}
        
        <div style={styles.cardContainer}>
            {cards.map((card,idx) => (
                <Card key={idx} {...card}/>
            ))}
        </div>
    </div>
  )
}

const styles = {
    cardContainer : {
        display: "flex",
        justifyContent: "center",
        flexWrap:"wrap",
        marginTop:"20px",
    },
};

export default Home