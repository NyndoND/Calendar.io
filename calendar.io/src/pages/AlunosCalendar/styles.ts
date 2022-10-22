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
  flex-direction: column;
  width: calc(100% - 20px) ;
  height: calc(100% - 40px);

  align-items: center;
  justify-content: center;

  margin: 40px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2), 0 4px 7px 0 rgba(0, 0, 0, 0.19);

  //background-color: beige;
`;

export const Calendar = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`;



export const Title = styled.div`
  display: flex;

  width: 80%;
  height: 10%;
  margin-top: 20px;
  
  align-items: center;
  justify-content: center;

  border-radius: 20px;

  background-color: aqua;
`;


export const SundayColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% / 8);

  align-items: center;

  //background-color: aquamarine;
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

  background-color: beige;

`;

export const LessonData = styled.div`
 display: flex;
 

`;
export const LessonDescription = styled.div`
 display: flex;

 width: 90%;


`;
export const ChangeMonitor = styled.div`
  display: flex;
  width: 97%;
  height: 5%;
  //background-color: #000;

`;

export const Select = styled.select`
  display: flex;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  border: 0.5px solid #00000029;

  color: black;
  text-align: center;
  font-family: "Montserrat", Times, serif;
  font-size: 1vw;
  font-weight: bold;
`

export const Option = styled.option`
  width: 100%;
  height: 30%;
`;

export const InputNewLesson = styled.div` 
  margin-top: 10px;
  width: calc(100% * 1/8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputDate = styled.input`
  margin: 10px;
`;

export const InputHour = styled.input`
  margin: 10px;
`;

export const InputStudentName = styled.input`
  margin: 10px;
`;

export const InputLessonDescription = styled.input`
  margin: 10px;
`;

export const SelectWeekDay = styled.select`
  margin: 10px;
  width: 80%;
`;

export const OptionWeekDay = styled.option``;