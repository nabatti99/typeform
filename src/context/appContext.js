import { createContext, useReducer } from "react";
import appReducer from "./appReducer";

const contextInit = {
  value: {
    currentPage: 0,
    answer: {},
  },
  dispatch: null,
};

export const appContext = createContext(contextInit);

export function AppContextProvider({ children }) {
  const [value, dispatch] = useReducer(appReducer, contextInit.value);

  const ContextProvider = appContext.Provider;

  return (
    <ContextProvider
      value={{
        value,
        dispatch,
      }}
    >
      {children}
    </ContextProvider>
  );
}
