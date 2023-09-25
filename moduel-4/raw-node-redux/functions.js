const { default: fetch } = require("node-fetch");

const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=5`
  );
  const todos = await response.json();

  dispatch({ type: "todo/fetchAndAddTodos", payload: todos });

  console.log(`fetched ${getState().todos.length} todos`);
};

module.exports = {
  fetchTodos,
};
