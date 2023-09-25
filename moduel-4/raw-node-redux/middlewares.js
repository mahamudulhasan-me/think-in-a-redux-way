const { default: fetch } = require("node-fetch");

const applyDelayMethod = (store) => (next) => (action) => {
  if (action.type === "todo/addTodo") {
    console.log("delaying...");
    setTimeout(() => {
      next(action);
    }, 2000);
  }
  return next(action);
};

const fetchAsyncTodos = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch, store.getState);
    return;
  }
  return next(action);
};

module.exports = {
  applyDelayMethod,
  fetchAsyncTodos,
};
