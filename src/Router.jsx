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
import { QuemSou } from "./pages/QuemSou";
import { Home } from "./pages/Home";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "./pages/Home.jsx", element: <Home /> },
      { path: "./pages/QuemSou.jsx", element: <QuemSou /> }
    ],
  },
]);
