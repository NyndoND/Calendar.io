import { DefaultButton } from '../../Components/DefaultButton';
import {
  Container,
  ContainerCard,
  Title,
  SundayColumn,
  LessonsCard,
  LessonData,
  LessonDescription,
  ButtonContainer,
} from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useDefaultContext } from '../../Context/contextControl';
import { useEffect, useState } from 'react';

import { IWeekLessons, ILessons } from '../../models/modelsApi';

const teste = {

}

const weekDays = [
  {
    day: "Domingo",
    lessons: [
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de Geografia"
      },
    ]
  },
  {
    day: "Segunda",
    lessons: [
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Andre",
        lessonDescription: "Reforço de matemática"
      },
    ]
  },
  {
    day: "Terça",
    lessons: [
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
    ]
  },
  {
    day: "quarta",
    lessons: [
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
    ]
  },
  {
    day: "Quinta",
    lessons: [
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
    ]
  },
  {
    day: "Sexta",
    lessons: [
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
    ]
  },
  {
    day: "Sabádo",
    lessons: [
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
      {
        id: uuidv4(),
        lessonData: "20/10/22",
        lessonHour: "8:00",
        studentName: "Renann",
        lessonDescription: "Reforço de matemática"
      },
    ]
  }
]

export default function MonitorCalendar() {

  const { loggedMonitorData } = useDefaultContext();

  const [weekLessons, setWeekLessons] = useState<IWeekLessons[]>([] as IWeekLessons[]);


  function handleTeste() {
    //Nice deu certo
    //console.log(loggedMonitorData)
  }

  useEffect(()=>{
    setWeekLessons(loggedMonitorData.allLessons)
  },[loggedMonitorData])

  return (
    <Container>
      <ContainerCard>
        {
          weekLessons.map((day, index) => {
            return (
              <SundayColumn key={index}>
                <Title> {day.day} </Title>

                {day.lessons.map((lesson) => {
                  return (
                    <LessonsCard>
                      <LessonData>
                        {lesson.lessonData}
                      </LessonData>
                      <LessonDescription>
                        {lesson.lessonHour} - {lesson.studentName} - {lesson.lessonDescription}
                      </LessonDescription>
                      <ButtonContainer>
                        <DefaultButton
                          textButton='Confirm'
                          onClick={handleTeste}
                          minHeight={"20px"}
                          minWidth={"40px"}
                          fontSize={"10px"}
                          backgrounColor={"green"}
                        />
                        <DefaultButton
                          textButton='Cancel'
                          onClick={() => { }}
                          minHeight={"20px"}
                          minWidth={"40px"}
                          fontSize={"10px"}
                          backgrounColor={"red"}
                        />
                      </ButtonContainer>
                    </LessonsCard>
                  )
                })}
              </SundayColumn>
            )
          })
        }
      </ContainerCard>
    </Container>
  )
}