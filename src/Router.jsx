/**
 * Cadastre as rotas da sua aplicação!
 * Lembrando: a estrutura do objeto que configura a rota é a seguinte:
 *
 * {
 *   path: "/caminho-da-rota",
 *   element: <ComponenteDaRota />,
 * }
 */

import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { QuemSou } from "./pages/QuemSou.jsx";
import { Home } from "./pages/Home.jsx";
import { Error } from "./components/Error";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/quem-sou", element: <QuemSou /> },
      { path: "*", element: <Error /> }
    ],
  },
]);
