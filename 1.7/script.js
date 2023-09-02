const counterValue = document.getElementById("num");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

const initialValue = {
  value: 0,
};

// action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creator

//increment creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

//decrement creator
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

const counterReducer = (state = initialValue, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
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
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
