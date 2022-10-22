import styled from "styled-components";
import { theme} from '../../theme';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  width: calc(100% - 20px) ;
  height: calc(100% - 40px);

  margin: 40px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2), 0 4px 7px 0 rgba(0, 0, 0, 0.19);

`;


export const Title = styled.div`
  display: flex;

  width: 80%;
  height: 10%;
  margin-top: 20px;
  
  align-items: center;
  justify-content: center;

  border-radius: 20px;

  background-color: ${theme.colors.first};
`;


export const SundayColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% / 7);

  align-items: center;

`;


export const LessonsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  margin: 10px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2), 0 4px 7px 0 rgba(0, 0, 0, 0.19);


  background-color: ${theme.colors.second};

`;

export const LessonData = styled.div`
 display: flex;
 

`;
export const LessonDescription = styled.div`
 display: flex;

 width: 90%;


`;
export const ButtonContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;
