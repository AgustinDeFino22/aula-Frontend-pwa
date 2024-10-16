import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cabecalho from './comum/componentes/cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';
import BotaoContador from './paginas/ListaProdutos/BotaoContador/BotaoContador';
import PaginaListaTarefas from './paginas/PaginaListaTarefas/PaginaListaTarefas';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'Lista-produtos',
    element: <ListaProdutos/>,
  },
  {
    path: 'botao-contador',
    element: <BotaoContador/>,
  },
  {
    path: 'lista-tarefas',
    element: <PaginaListaTarefas/>
  }
]);


function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />

    </>
  );
}

export default App
