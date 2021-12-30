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
  const [checked, setChecked] = useState(false);
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
      checked,
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
    const item = state.list
      .find((item) => item.id === id)
      .map((item) => (item.checked = setChecked(!checked)));
    dispatch({ type: "CHECK_ITEM", payload: item });
  };

  useEffect(() => {
    if (state.list.length === 0) {
      console.log(!!state.list);
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
