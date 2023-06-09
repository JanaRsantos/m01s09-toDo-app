import { TodoItem } from "./TodoItem";
import { useToDos } from "../contexts/useToDos";

export const TodoList = ({ name }) => {
  const { completedToDos, pendingToDos } = useToDos();

  return (
    <section className="col p-2 m-2 border rounded-1">
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        {name === "Finalizados"
          ? completedToDos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
          : pendingToDos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        }
      </ul>
    </section>
  );
};
