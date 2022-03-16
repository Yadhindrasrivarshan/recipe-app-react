import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
const Searched = () => {
  const [searchedReciepes, setSearchedReciepes] = useState([]);
  const params = useParams();
  useEffect(() => {
    getSearched(params.searched);
  }, [params.searched]);
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );

    const recipes = await data.json();
    setSearchedReciepes(recipes.results);
  };
  return (
    <Grid>
      {searchedReciepes.map((item) => (
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

const Grid = styled.div`
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
export default Searched;
