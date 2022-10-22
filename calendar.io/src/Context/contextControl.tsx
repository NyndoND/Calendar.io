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
  getMonitorsName: () => Promise<{id: string,name: string}[]>;
  getMonitorNamePassword: () => Promise<{id: string,name: string, senha: string}[]>;
  setLoggedMonitor: (monitorName: string) => void;
  loggedMonitorData: Imonitor;
}

const Context = createContext({} as ContextApi);

interface IContextProvider {
  children: ReactNode;
}

function ContextProvider({ children }: IContextProvider) {
  const [allAlunos, setAllAlunos] = useState<Ialunos[]>([] as Ialunos[]);
  const [allMonitor, setAllMonitor] = useState<Imonitor[]>([] as Imonitor[]);

  const [loggedMonitorData, setLoggedMonitorData] = useState<Imonitor>({} as Imonitor);


  async function loadAlunos() {
    const response = await api.get('/alunos');
    // talvez formatar o dado quando receber da api
    setAllAlunos(response.data);
  }

  async function loadMonitors() {
    const response = await api.get("/monitor");
    setAllMonitor(response.data);
  }

  async function getMonitorsName() {
    if (allMonitor.length > 0) {
      const response = allMonitor.map((monitor) => {
        return (
          {
            id: monitor.id,
            name: monitor.name
          }
        )
      })
      return response
    } else {
      await loadMonitors();
      const response = allMonitor.map((monitor) => {
        return (
          {
            id: monitor.id,
            name: monitor.name
          }
        )
      })
      return response;
    }
  }

  async function getMonitorNamePassword() {
    if (allMonitor.length > 0) {
      const response = allMonitor.map((monitor) => {
        return (
          {
            id: monitor.id,
            name: monitor.name,
            senha: monitor.senha
          }
        )
      })
      return response;
    } else {
      await loadMonitors();
      const response = allMonitor.map((monitor) => {
        return (
          {
            id: monitor.id,
            name: monitor.name,
            senha: monitor.senha
          }
        )
      })
      return response;
    }
  }

  function setLoggedMonitor(monitorName: string){
    const response = allMonitor.filter(monitor=> monitor.name === monitorName);
    setLoggedMonitorData(response[0]);
  }

  useEffect(() => {
    loadAlunos();
    loadMonitors();
  }, [])

  return (
    <Context.Provider value={{
      allAlunos: allAlunos,
      allMonitor: allMonitor,
      getMonitorsName,
      getMonitorNamePassword,
      setLoggedMonitor,
      loggedMonitorData: loggedMonitorData
    }}>
      {children}
    </Context.Provider>
  )
}

function useDefaultContext() {
  const context = useContext(Context);
  return context;
}

export { ContextProvider, useDefaultContext }
