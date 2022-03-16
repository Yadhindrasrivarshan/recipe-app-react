import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, NavLink, useParams } from "react-router-dom";
const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  useEffect(() => {
    getCuisine(params.type);
  }, [params]);
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );

    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => (
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 1.5rem;
`;

const Card = styled.div`
  img {
    width: 70%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    max-width: 250px;
    word-wrap: break-word;
    padding: 1rem 1rem 1rem 0;
  }
`;
export default Cuisine;
