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
  const check = false;
  const reference = useRef(null);
  const [check, setCheck] = useState(false);
  const [text, setText] = useState("");
  const initialState = {
    list: [],
    isEmpty: true,
    content: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      text,
      id: new Date().getTime().toString(),
      checked: check,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setText("");
    reference.current.focus();
  };

  const handleDelete = (id) => {
    const filteredList = state.list.filter((item) => item.id !== id);
    dispatch({ type: "DELETE_ITEM", payload: filteredList });
  };

  const handleCheck = (id) => {
    const item = state.list.find((item) => item.id === id);
    const items = state.list.filter((item) => item.id !== id);
    const checkedItem = { ...item, checked: setCheck(!check) };
    const newItems = [...items, checkedItem];
    dispatch({ type: "CHECK_ITEM", payload: newItems });
  };

  useEffect(() => {
    if (state.list.length === 0) {
      dispatch({ type: "NO_VALUE" });
    }
  }, [state.list]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        text,
        setText,
        handleSubmit,
        reference,
        handleDelete,
        handleCheck,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export default TasksContext;
