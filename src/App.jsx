import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToDoProvider } from "./contexts/ToDoProvider";

export const App = () => {
  return (
    <ToDoProvider>
      <Header />
      <main className="container mt-4">
        <Outlet />
      </main>
    </ToDoProvider>
  );
};
