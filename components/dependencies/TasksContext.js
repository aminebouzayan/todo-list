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
      id: new Date().getTime().toString(),
      text,
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
    setCheck(!check);
    let checkedList = state.list.map((item) => {
      if (item.id === id) {
        item.checked = check;
      } else {
        return item;
      }
    });
    dispatch({ type: "CHECK_ITEM", payload: checkedList });
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
