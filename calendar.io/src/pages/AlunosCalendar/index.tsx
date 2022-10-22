
import { DefaultButton } from '../../Components/DefaultButton';
import {
  Container,
  ContainerCard,
  Title,
  SundayColumn,
  LessonsCard,
  LessonData,
  LessonDescription,
  ChangeMonitor,
  Select,
  Option,
  Calendar
} from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


const monitors = [
  "Renann", "Robson"
]

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

export default function AlunosCalendar() {


  const [selectedMonitor, setSelectedMonitor] = useState("-1");

  return (
    <Container>
      <ContainerCard>
        <ChangeMonitor>
          <Select
            value={selectedMonitor}
            onChange={(event) => setSelectedMonitor(event.target.value)}
            style={{ paddingLeft: "5%" }}
          >
            <Option value="-1" disabled selected>
              Selecione um monitor
            </Option>
            {
              monitors.map((monitor) => {
                return (
                  <Option value={monitor}>
                    {monitor}
                  </Option>
                )
              })
            }
          </Select>
        </ChangeMonitor>
        <Calendar>

        
        {
          weekDays.map((day, index) => {
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
                    </LessonsCard>
                  )
                })}
              </SundayColumn>
            )
          })
        }
        </Calendar>
      </ContainerCard>
    </Container>
  )
}