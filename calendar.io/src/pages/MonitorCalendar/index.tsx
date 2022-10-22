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

import { IWeekLessons, ILessons, Imonitor } from '../../models/modelsApi';
import { useNavigate } from 'react-router-dom';

import {theme} from "../../theme";

export default function MonitorCalendar() {

  const navigate = useNavigate();

  const { loggedMonitorData, atualizingMonitor, deletingMonitor } = useDefaultContext();

  const [weekLessons, setWeekLessons] = useState<IWeekLessons[]>([] as IWeekLessons[]);


  function handleDeleteLesson(id: string, day: string) {
    const newWeekLessons = weekLessons.map((weekDay) => {
      if (weekDay.day === day) {
        const newLessons = weekDay.lessons.filter(lesson => lesson.id !== id);
        return {
          day: weekDay.day,
          lessons: newLessons
        }
      }
      return weekDay;
    })

    setWeekLessons(newWeekLessons);
    const monitorData: Imonitor = {
      name: loggedMonitorData.name,
      senha: loggedMonitorData.senha,
      id: loggedMonitorData.id,
      allLessons: newWeekLessons
    }
    atualizingMonitor(loggedMonitorData.id, monitorData);
  }

  function handleConfirmLesson(id: string, day: string) {
    const newWeekLessons = weekLessons.map((weekDay) => {
      if (weekDay.day === day) {
        const newLessons = weekDay.lessons.map((lesson) => {
          if (lesson.id === id) {
            return {
              id: lesson.id,
              lessonDate: lesson.lessonDate,
              lessonDescription: lesson.lessonDescription,
              lessonHour: lesson.lessonHour,
              studentName: lesson.studentName,
              status: 'confirmed'
            }
          }
          return lesson;
        });
        return {
          day: weekDay.day,
          lessons: newLessons
        }
      }
      return weekDay;
    })
    
    const monitorData: Imonitor = {
      name: loggedMonitorData.name,
      senha: loggedMonitorData.senha,
      id: loggedMonitorData.id,
      allLessons: newWeekLessons
    }
    atualizingMonitor(loggedMonitorData.id, monitorData);

    setWeekLessons(newWeekLessons);
    alert("Aula confirmada com sucesso, agora todos alunos podem ve-la no calendário")
  }

  function handleDeleteMonitor(){
    deletingMonitor(loggedMonitorData.id)
    navigate('/');
  }

  useEffect(() => {
    setWeekLessons(loggedMonitorData.allLessons)
  }, [loggedMonitorData])

  return (
    <Container>
      <ContainerCard>
        {
          weekLessons.map((day, index) => {
            return (
              <SundayColumn key={index}>
                <Title> {day.day} </Title>
                {day.lessons && day.lessons.map((lesson) => {
                  return (
                    <LessonsCard>
                      <LessonData>
                        {lesson.lessonDate}
                      </LessonData>
                      <LessonDescription>
                        {lesson.lessonHour} - {lesson.studentName} - {lesson.lessonDescription}
                      </LessonDescription>
                      <ButtonContainer>
                        <DefaultButton
                          textButton='Confirm'
                          onClick={() => handleConfirmLesson(lesson.id, day.day)}
                          minHeight={"20px"}
                          minWidth={"40px"}
                          fontSize={"10px"}
                          backgrounColor={"green"}
                        />
                        <DefaultButton
                          textButton='Cancel'
                          onClick={() => handleDeleteLesson(lesson.id, day.day)}
                          minHeight={"20px"}
                          minWidth={"40px"}
                          fontSize={"10px"}
                          backgrounColor={theme.colors.third}
                          hoverBackgrounColor={theme.colors.fifth}
                        />
                      </ButtonContainer>
                    </LessonsCard>
                  )
                })}
              </SundayColumn>
            )
          })
        }
          <DefaultButton
            onClick={handleDeleteMonitor}
            textButton={"Deletar perfil"}
            fontSize='30px'
            backgrounColor={theme.colors.fifth}
            hoverBackgrounColor={theme.colors.third}
          />
      </ContainerCard>
    </Container>
  )
}

