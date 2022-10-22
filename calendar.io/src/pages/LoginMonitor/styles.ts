import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  //flex-direction: column;
  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  width: calc(100% - 20px) ;
  height: calc(100% - 40px);

  align-items: center;
  justify-content: center;

  margin: 40px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2), 0 4px 7px 0 rgba(0, 0, 0, 0.19);

  //background-color: beige;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 90%;
  margin: 20px;

  align-items: center;
  justify-content: center;
  //background-color: azure;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;

  margin: 20px;
`;

export const InputName = styled.input`
  width: 50%;
  height: 25px;
  margin: 10px;

  border-radius: 10px;
`;

export const InputPassword = styled.input`
  width: 50%;
  height: 25px;
  margin: 10px;

  border-radius: 10px;
`;

export const InputConfirmPassword = styled.input`
  width: 50%;
  height: 25px;
  margin: 10px;

  border-radius: 10px;
`;

export const ButtonConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 5%;
  margin-top: 20px;
`;

