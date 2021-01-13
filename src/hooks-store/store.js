import { useState, useEffect } from "react";

// we are going to use our custom hook to manage the logic and DATA by accessing our global state
// which will give us access to data because it's outside of our custom hook..
let globalState = {}; // defined outside of my custom hook!

let listeners = [];

let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1]; // we are interested in updating function only , not the first value of our array

  const dispatch = (actionId, payload) => {
    const newState = actions[actionId](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    // using useEffect to make sure we can clean up our listeners
    if (shouldListen) {
      listeners.push(setState); // we push our setfunctions to our listerens array
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState); // clean up function to remove our listener when component unmounts!
      }
    };
  }, [setState, shouldListen]);
  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
