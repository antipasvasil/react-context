import { useCallback } from "react";

export const updateObject = (state, updateStatePropertie) => {
  return {
    ...state,
    ...updateStatePropertie,
  };
};

const getCurrentTimeFormatted = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const milliseconds = currentTime.getMilliseconds();

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

export const Logger = (reducer) => {
  const reducerWithLogger = useCallback((state, action) => {
    const next = reducer(state, action);

    console.log('====================================');
    console.group(`%cAction: %c${action.type} %cAt ${getCurrentTimeFormatted()}`, "color: green; font-weight: bold;", "color: blue; font-weight: bold;", "color: green; font-weight: lighter;");
    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log("%cNext State:", "color: #47B04B; font-weight: 700;", next);
    console.groupEnd();
    console.log('====================================');

    return next;
  }, [reducer]);

  return reducerWithLogger;
}
