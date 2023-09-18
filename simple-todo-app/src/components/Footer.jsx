import { useSelector } from "react-redux";

const Footer = () => {
  const todos = useSelector((state) => state.todos);

  const todosRemaing = todos.map((todo) => !todo.completed).length;

  const numberOfTodos = (numOfTodos) => {
    switch (numOfTodos) {
      case 0:
        return "No Task";
      case 1:
        return "1 Task";

      default:
        return `${numOfTodos} Tasks`;
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaing)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li className="cursor-pointer font-bold">All</li>
        <li>|</li>
        <li className="cursor-pointer">Incomplete</li>
        <li>|</li>
        <li className="cursor-pointer">Complete</li>
        <li></li>
        <li></li>
        <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
};

export default Footer;
