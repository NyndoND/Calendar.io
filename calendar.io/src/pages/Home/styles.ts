import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  //background-color: #000;
`;

export const Title = styled.div`
  display: flex;
  font-size: 100px;
  margin: 50px;
  //font-weight: bold;

`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 100px);
  height: 80%;

  padding-right: 100px;

  align-items: flex-end;
  justify-content: center;
  //background-color: aqua;
`;

