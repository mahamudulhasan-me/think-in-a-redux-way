import { useDispatch } from "react-redux";
import doubleThik from "../assets/images/double-tick.png";
import notes from "../assets/images/notes.png";
import plus from "../assets/images/plus.png";
import { added, allCompleted, clearCompleted } from "../redux/todos/action";
const ToDoAddForm = () => {
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    const todoBody = e.target.todo.value;
    dispatch(added(todoBody));
    e.target.reset();
  };
  return (
    <div>
      <form
        onSubmit={addTodo}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          name="todo"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          style={{ backgroundImage: `url(${plus})` }}
          className={`appearance-none w-8 h-8  bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={() => dispatch(allCompleted())}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleThik} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li
          onClick={() => dispatch(clearCompleted())}
          className="cursor-pointer"
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default ToDoAddForm;
