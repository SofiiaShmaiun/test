import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  height: 550px;
  overflow: auto;
  min-height: 350px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -9px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: all 0.4s;
  border: 3px solid $hoverColor;
  background-color: $hoverColor;

  &:hover {
    box-shadow: 0px 0px 59px -8px rgba(0, 0, 0, 0.75);
  }

  img {
    margin: 0 auto;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
    margin: 0;
    text-align: justify;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
