import styled from "styled-components";

export const BeerPage = styled.div`
  margin: 0 20px;
  p {
    font-size: large;
    font-weight: 500;
  }
  tbody {
    display: flex;
  }
  tr {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  td {
    border: 1px dashed black;
  }
  .contributedBy {
    text-align: center;
  }
  .foodPairing {
    display: flex;
    flex-direction: column;
    p {
      margin-bottom: 0;
    }
  }
  img {
    margin-top: 30px;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 5px;
  .mainInfo {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
  }

  h2 {
    margin-top: 0;
  }

  h3 {
    margin-top: 0;
    text-align: center;
  }
  p {
    width: 200px;
  }
  span {
    font-size: large;
    font-weight: 500;
  }
`;

export const IngredientsGroup = styled.div`
  padding-top: 30px;
  .ingredientsInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ingredientGroup {
    text-align: center;
  }

  .ingredient {
    &::before {
      content: "";
      display: inline-block;
      align-self: center;
      width: 14px;
      height: 14px;

      background-color: aquamarine;
    }
  }
`;

export const MethodInfo = styled.div`
  padding-top: 30px;

  .methodInfo {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      &::before {
        content: "";
        display: inline-block;
        align-self: center;
        width: 14px;
        height: 14px;

        background-color: aquamarine;
      }
    }
  }
  .ingredientGroup {
    text-align: center;
  }
`;
