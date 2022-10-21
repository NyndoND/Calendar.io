import {
  Container
} from './styles';

import { useDefaultContext } from '../../Context/contextControl';

import { api } from '../../servicesAPI/api';
import { Link } from 'react-router-dom';

export default function Home() {

  const { allAlunos } = useDefaultContext();

  async function handleCreateMonitor() {
    console.log(allAlunos);
    await api.post('/monitor', {
      id: 5,
      name: "Paulo",
      senha: "qwert",
      aulas: [
        {
          dia: "20/10/2022",
          aluno: "Andre",
          horário: "12:40",
          tema_aula: "Reforço de matemática"
        },
        {
          dia: "21/10/2022",
          aluno: "Fernando",
          horário: "22:40",
          tema_aula: "Reforço de Geografia"
        }
      ]
    }
    )
  }

  function handleCreateAluno() {

  }
  return (
    <Container>
      <Link to={'/monitor'} onClick={handleCreateMonitor}>
        Home page
      </Link>
    </Container>
  )
}