import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import MonitorCalendar from './pages/MonitorCalendar';
import ErrorPage from './pages/ErrorPage';
import AlunosCalendar from './pages/AlunosCalendar';
import LoginMonitor from './pages/LoginMonitor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/monitor",
    element: <MonitorCalendar />,
  },
  {
    path: "/alunos",
    element: <AlunosCalendar />,
  },
  {
    path: "/loginMonitor",
    element: <LoginMonitor />,
  },
]);

//talvez adicionar os métodos de data entre as rotas
function App() {
  //console.log(allAlunos);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
