import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Ialunos, Imonitor } from '../models/modelsApi';
import { api } from '../servicesAPI/api';

interface ContextApi {
  allMonitor: Imonitor[];
  allAlunos: Ialunos[];
}

const Context = createContext({} as ContextApi);

interface IContextProvider {
  children: ReactNode;
}

function ContextProvider({children}: IContextProvider ) {
  const [allAlunos, setAllAlunos] = useState<Ialunos[]>([] as Ialunos[]);
  const [allMonitor, setAllMonitor] = useState<Imonitor[]>([] as Imonitor[]);

  async function loadAlunos(){
    const response = await api.get('/alunos');
    // talvez formatar o dado quando receber da api
    setAllAlunos(response.data);
  }

  async function loadMonitores(){
    const response = await api.get("/monitor");
    setAllMonitor(response.data);
  }

  useEffect(()=>{
    loadAlunos();
    loadMonitores();
  },[])

  return (
    <Context.Provider value={{
      allAlunos: allAlunos,
      allMonitor: allMonitor
    }}>
      {children}
    </Context.Provider>
  )
}

function useDefaultContext(){
  const context = useContext(Context);
  return context;
}

export {ContextProvider, useDefaultContext}
