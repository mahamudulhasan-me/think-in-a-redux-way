const Redux = require("redux");
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

    default:
      break;
  }
};

const store = Redux.createStore(todoReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "todo/addTodo",
  payload: "Learn Redux after dispatch",
});
