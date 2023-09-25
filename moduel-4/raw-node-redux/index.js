const { createStore, applyMiddleware } = require("redux");

const { applyDelayMethod, fetchAsyncTodos } = require("./middlewares.js");
const { fetchTodos } = require("./functions.js");
const thunk = require("redux-thunk");

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/addTodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todo/fetchAndAddTodos":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer, applyMiddleware(thunk.default));

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "todo/addTodo",
//   payload: "Learn Redux after dispatch",
// });
store.dispatch(fetchTodos);
