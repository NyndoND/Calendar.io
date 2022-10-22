import {
  Container,
  Title,
  ButtonContainer
} from './styles';

import { useDefaultContext } from '../../Context/contextControl';

import { api } from '../../servicesAPI/api';
import { Link } from 'react-router-dom';
import { DefaultButton } from '../../Components/DefaultButton';

export default function Home() {

  const { allAlunos } = useDefaultContext();

  async function handleCreateMonitor() {

  }

  function handleCreateAluno() {

  }

  return (
    <Container>
      <Title>
        Calendar.io
      </Title>
      <ButtonContainer>
          <DefaultButton
            textButton='Monitor'
            onClick={() => { }}
            navigationTo={"/loginMonitor"}
            minWidth={"200px"}
            minHeight={"50px"}
          />

          <DefaultButton
            textButton='Alunos'
            onClick={() => { }}
            navigationTo={"/alunos"}
            minWidth={"200px"}
            minHeight={"50px"}
          />
      </ButtonContainer>
    </Container>
  )
}