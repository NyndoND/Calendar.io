
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
  Calendar,
  InputNewLesson,
  InputDate,
  InputHour,
  InputLessonDescription,
  InputStudentName,
  SelectWeekDay,
  OptionWeekDay
} from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useDefaultContext } from '../../Context/contextControl';
import { ILessons, Imonitor, IWeekLessons } from '../../models/modelsApi';



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
const weekDays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado"
]

export default function AlunosCalendar() {

  const { loggedMonitorData, allMonitor, atualizingMonitor } = useDefaultContext();

  const [weekLessons, setWeekLessons] = useState<IWeekLessons[]>([] as IWeekLessons[]);
  const [selectedMonitor, setSelectedMonitor] = useState<Imonitor>({} as Imonitor);
  const [monitors, setMonitors] = useState<string[]>([] as string[]);

  const [inputDate, setInputDate] = useState("");
  const [inputWeekDay, setInputWeekDay] = useState("");
  const [inputHour, setInputHour] = useState("");
  const [inputLessonDes, setInputLessonDes] = useState("");
  const [inputStudent, setInputStudent] = useState("");

  function handleSelectMonitor(monitorName: string) {
    const monitor = allMonitor.filter(monitor => monitor.name === monitorName)
    setSelectedMonitor(monitor[0])
    setWeekLessons(monitor[0].allLessons);
  }

  function handleCreateLesson() {
    const newLesson: ILessons = {
      id: uuidv4(),
      lessonDate: inputDate,
      lessonDescription: inputLessonDes,
      lessonHour: inputHour,
      status: "schedule",
      studentName: inputStudent
    }
    if (selectedMonitor) {
      const newMonitorLessons = selectedMonitor.allLessons.map((weekLessons) => {
        if (weekLessons.day == inputWeekDay) {
          weekLessons.lessons.push(newLesson);
          return weekLessons;
        }
        return weekLessons;
      })
      const alteredMonitorLessons: Imonitor = {
        id: selectedMonitor.id,
        allLessons: newMonitorLessons,
        name: selectedMonitor.name,
        senha: selectedMonitor.senha
      }
  
      atualizingMonitor(selectedMonitor.id, alteredMonitorLessons);
      setWeekLessons(alteredMonitorLessons.allLessons);
      console.log(alteredMonitorLessons);
      alert("Aula planejado com sucesso, por favor aguarde o monitor confimar-la")
    }else {
      const newMonitorLessons = weekLessons.map((weekLessons) => {
        if (weekLessons.day == inputWeekDay) {
          weekLessons.lessons.push(newLesson);
          return weekLessons;
        }
        return weekLessons;
      })
      const alteredMonitorLessons: Imonitor = {
        id: allMonitor[0].id,
        allLessons: newMonitorLessons,
        name: allMonitor[0].name,
        senha: allMonitor[0].senha
      }
  
      atualizingMonitor(allMonitor[0].id, alteredMonitorLessons);
      setWeekLessons(alteredMonitorLessons.allLessons);
      console.log(alteredMonitorLessons);
      alert("Aula planejada com sucesso, por favor aguarde o monitor confimar-la")
    }
    setInputDate("");
    setInputHour("");
    setInputLessonDes("");
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
            value={selectedMonitor.name}
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
                    if (lesson.status === "confirmed") {
                      return (
                        <LessonsCard>
                          <LessonData>
                            {lesson.lessonDate}
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
          <InputNewLesson>
            <DefaultButton
              onClick={handleCreateLesson}
              textButton={"Requisitar aula"}
              hoverBackgrounColor={"aquamarine"}
              backgrounColor={"green"}
              minWidth={"80%"}
              fontSize={"20px"}
            />
            <InputDate
              placeholder='Digite a data da aula'
              value={inputDate}
              onChange={(event) => setInputDate(event.target.value)}
            />
            <SelectWeekDay
              value={inputWeekDay}
              onChange={(event) => setInputWeekDay(event.target.value)}
            >
              {
                weekDays.map((daysName) => {
                  return (
                    <OptionWeekDay value={daysName}>
                      {daysName}
                    </OptionWeekDay>
                  )
                })
              }
            </SelectWeekDay>
            <InputHour
              placeholder='Digite a hora da aula'
              value={inputHour}
              onChange={(event) => setInputHour(event.target.value)}
            />
            <InputLessonDescription
              placeholder='Sobre o que será a aula'
              value={inputLessonDes}
              onChange={(event) => setInputLessonDes(event.target.value)}
            />
            <InputStudentName
              placeholder='Qual o seu nome?'
              value={inputStudent}
              onChange={(event) => setInputStudent(event.target.value)}
            />
          </InputNewLesson>
        </Calendar>
      </ContainerCard>
    </Container>
  )
}