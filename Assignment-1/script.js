// Selection of DOM Element

const deleteBtns = document.querySelectorAll(".lws-delete");
const resetBtn = document.getElementById("resetBtn");
const addAnotherMatchBtn = document.getElementById("addMatchBtn");
const allMatchesContainer = document.getElementById("all-matches-container");

// // initial state
const initialState = [
  {
    id: 1,
    score: 0,
  },
];

const idGenerator = (arr) => {
  const maxId = arr.reduce((maxId, match) => Math.max(maxId, match.id), -1);
  return maxId + 1;
};

// Actions identifiers
const ADDANOTHERMATCH = "score/addAnotherMatch";
const DELETEMATCH = "score/deleteMatch";

//action creator
const addMatch = () => {
  return {
    type: ADDANOTHERMATCH,
  };
};

const deleteMatch = (payload) => {
  return {
    type: DELETEMATCH,
    payload,
  };
};

// reducer function
const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDANOTHERMATCH:
      const newId = idGenerator(state);
      return [...state, { id: newId, score: 0 }];
    case DELETEMATCH:
      return state.filter((match) => match.id != action.payload);
    default:
      return state;
  }
};

// Create Store
const store = Redux.createStore(scoreReducer);

const matchHtml = (match) => {
  return `
      <div class="match">
      <div class="wrapper">
          <button class="lws-delete" onclick = "deleteMatchHandler(${match.id})">
              <img src="./image/delete.svg" alt="" />
          </button>
          <h3 class="lws-matchName">Match ${match.id}</h3>
      </div>
      <div class="inc-dec">
          <form class="incrementForm" onsubmit = "event.preventDefault(); incrementHandler(${match.id}, this)">
              <h4>Increment</h4>
              <input
                  type="number"
                  name="increment"
                  class="lws-increment"
              />
          </form>
          <form class="decrementForm" onsubmit = "event.preventDefault(); decrementHandler(${match.id}, this)">
              <h4>Decrement</h4>
              <input
                  type="number"
                  name="decrement"
                  class="lws-decrement"
              />
          </form>
      </div>
      <div class="numbers">
          <h2 class="lws-singleResult">${match.score}</h2>
      </div>
      </div>
      `;
};

// Button Click Event Listener
addAnotherMatchBtn.addEventListener("click", () => {
  store.dispatch(addMatch());
});

const deleteMatchHandler = (id) => {
  store.dispatch(deleteMatch(id));
};

const incrementHandler = (id, formElm) => {
  console.log({ id, formElm });
  const value = Number(formElm.querySelector("."));
};

const render = () => {
  const state = store.getState();
  let elm = ``;
  state.map((match) => (elm += matchHtml(match)));
  return (allMatchesContainer.innerHTML = elm);
};

// Update UI initially
render();

store.subscribe(render);
