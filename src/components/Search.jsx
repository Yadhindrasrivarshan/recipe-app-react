import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch size={27} />
        <input
          type="text"
          value={input}
          placeholder="Search your favorite dish"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 13rem;
  position: relative;
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    height: 40px;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    width: 100%;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: -5%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
