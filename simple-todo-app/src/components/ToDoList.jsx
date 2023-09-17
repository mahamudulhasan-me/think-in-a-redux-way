import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const todoList = useSelector((state) => state.todos);
  console.log(todoList);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todoList.map((todo) => (
        <ToDoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ToDoList;
