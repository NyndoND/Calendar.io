import { DefaultButton } from '../../Components/DefaultButton';
import {
  Container,
  ContainerCard,
  Column,
  Title,
  InputConfirmPassword,
  InputName,
  InputPassword,
  ButtonConteiner
} from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDefaultContext } from '../../Context/contextControl';
import { useNavigate } from 'react-router-dom';


// const teste = {

// }

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

export default function LoginMonitor() {

  const navigate = useNavigate();

  const [inputNameLogin, setInputNameLogin] = useState("");
  const [inputPasswordLogin, setInputPasswordLogin] = useState("");

  const [inputNameRegister, setInputNameRegister] = useState("");
  const [inputPasswordRegister, setInputPasswordRegister] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const { getMonitorNamePassword, setLoggedMonitor } = useDefaultContext();

  async function LoginMonitor() {
    const response = await getMonitorNamePassword();
    const monitor = response.filter((monitor) => {
      if (monitor.name === inputNameLogin) {
        if (monitor.senha === inputPasswordLogin) {
          setLoggedMonitor(monitor.name);
          navigate("/monitor");
          return monitor;
        } 
      } 
    })
    if(monitor.length !== 1){
      console.log(monitor)
      alert("Nome ou senha incorretos, por favor tente novamente")
    }    
  }

  return (
    <Container>
      <ContainerCard>
        <Column>
          <Title>
            Login
          </Title>
          <InputName
            placeholder='Digite seu nome...'
            value={inputNameLogin}
            onChange={(event) => setInputNameLogin(event.target.value)}
          />
          <InputPassword
            placeholder='Digite sua senha...'
            value={inputPasswordLogin}
            onChange={(event) => setInputPasswordLogin(event.target.value)}
          />
          <ButtonConteiner>
            <DefaultButton
              onClick={() => LoginMonitor()}
              textButton={"Login"}
              backgrounColor={"green"}
              minHeight={"100%"}
              minWidth={"100%"}
            />
            <DefaultButton
              navigationTo='/'
              onClick={() => { }}
              textButton={"Cancel"}
              backgrounColor={"red"}
              minHeight={"100%"}
              minWidth={"100%"}
            />
          </ButtonConteiner>
        </Column>
        <Column>
          <Title>
            Registre-se
          </Title>
          <InputName
            placeholder='Digite seu nome...'
            value={inputNameRegister}
            onChange={(event) => setInputNameRegister(event.target.value)}
          />
          <InputPassword
            placeholder='Digite sua senha...'
            value={inputPasswordRegister}
            onChange={(event) => setInputPasswordRegister(event.target.value)}
          />
          <InputConfirmPassword
            placeholder='Digite sua senha novamente...'
            value={inputConfirmPassword}
            onChange={(event) => setInputConfirmPassword(event.target.value)}
          />
          <ButtonConteiner>
            <DefaultButton
              onClick={() => { }}
              textButton={"Login"}
              backgrounColor={"green"}
              minHeight={"100%"}
              minWidth={"100%"}
            />
            <DefaultButton
              navigationTo='/'
              onClick={() => { }}
              textButton={"Cancel"}
              backgrounColor={"red"}
              minHeight={"100%"}
              minWidth={"100%"}
            />
          </ButtonConteiner>
        </Column>
      </ContainerCard>
    </Container>
  )
}