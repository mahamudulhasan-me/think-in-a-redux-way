const counterValue = document.getElementById("num");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

const initialValue = {
  value: 0,
};

const counterReducer = (state = initialValue, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(counterReducer);

const render = () => {
  const value = store.getState();
  counterValue.innerText = value.value.toString();
};

render();
store.subscribe(render);

incrementEl.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
});
