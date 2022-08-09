import React from "react";
import styled from "styled-components";
export default function NewData() {
  const StyledComponent = styled.div`
    display: -webkit-flex;
    -webkit-flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 5px solid yellow;
    border-radius: 3px;
    background-color: red;
  `;
  const Button = styled.button`
    background-color: yellow;
    border: none;
    color: green;
    cursor: pointer;
  `;
  const Tomato = styled(StyledComponent)`
    background-color: pink;
    cursor: pointer;
  `;
  return (
    <div>
      <StyledComponent>
        <h2>this is new-data page</h2>
        <Button>Click me</Button>
        <Tomato>Ignore me</Tomato>
      </StyledComponent>
    </div>
  );
}
