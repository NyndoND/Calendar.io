
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
import { useEffect, useState } from 'react';
import { useDefaultContext } from '../../Context/contextControl';
import { IWeekLessons } from '../../models/modelsApi';



// const weekDays = [
//   {
//     day: "Domingo",
//     lessons: [
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de Geografia"
//       },
//     ]
//   },
//   {
//     day: "Segunda",
//     lessons: [
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Andre",
//         lessonDescription: "Reforço de matemática"
//       },
//     ]
//   },
//   {
//     day: "Terça",
//     lessons: [
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//     ]
//   },
//   {
//     day: "quarta",
//     lessons: [
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//     ]
//   },
//   {
//     day: "Quinta",
//     lessons: [
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//     ]
//   },
//   {
//     day: "Sexta",
//     lessons: [
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//     ]
//   },
//   {
//     day: "Sabádo",
//     lessons: [
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//       {
//         id: uuidv4(),
//         lessonData: "20/10/22",
//         lessonHour: "8:00",
//         studentName: "Renann",
//         lessonDescription: "Reforço de matemática"
//       },
//     ]
//   }
// ]

export default function AlunosCalendar() {

  const { loggedMonitorData, allMonitor } = useDefaultContext();

  const [weekLessons, setWeekLessons] = useState<IWeekLessons[]>([] as IWeekLessons[]);
  const [selectedMonitor, setSelectedMonitor] = useState("");
  const [monitors, setMonitors] = useState<string[]>([] as string[]);

  function handleSelectMonitor(monitorName: string) {
    const monitor = allMonitor.filter(monitor => monitor.name === monitorName)
    setSelectedMonitor(monitorName)
    setWeekLessons(monitor[0].allLessons);
  }

  useEffect(() => {
    setWeekLessons(allMonitor[0].allLessons)
    const monitorsName = allMonitor.map((monitor) => monitor.name)
    setMonitors(monitorsName);
  }, [loggedMonitorData])

  return (
    <Container>
      <ContainerCard>
        <ChangeMonitor>
          <Select
            value={selectedMonitor}
            onChange={(event) => handleSelectMonitor(event.target.value)}
          >
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
            weekLessons.map((day, index) => {
              return (
                <SundayColumn key={index}>
                  <Title> {day.day} </Title>

                  {day.lessons.map((lesson) => {
                    if (lesson.status === "confirm") {
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
                    }
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