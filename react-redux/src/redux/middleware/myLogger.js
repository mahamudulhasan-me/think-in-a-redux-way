import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`State: ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(`Next State: ${JSON.stringify(upcomingState)}`);

  //pass action
  next(action);
};

export default myLogger;
