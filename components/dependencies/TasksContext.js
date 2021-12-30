import React, {
  useContext,
  useReducer,
  useState,
  useRef,
  useEffect,
} from "react";
import reducer from "./reducer";

export const AppContext = React.createContext();

const TasksContext = ({ children }) => {
  const reference = useRef(null);
  const [text, setText] = useState("");
  const initialState = {
    list: [],
    isEmpty: true,
    content: "there is no item in this list",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { text, id: new Date().getTime().toString() };
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setText("");
    reference.current.focus();
  };

  const handleDelete = (id) => {
    const filteredList = state.list.filter((item) => item.id !== id);
    dispatch({ type: "DELETE_ITEM", payload: filteredList });
  };

  useEffect(() => {
    if (!!state.list) {
      dispatch({ type: "NO_VALUE" });
    }
  }, [state.list]);

  return (
    <AppContext.Provider
      value={{ ...state, text, setText, handleSubmit, reference, handleDelete }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export default TasksContext;
