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
  const [name, setName] = useState("");
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const initialState = {
    list: [],
    type: "warning",
    content: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return null;
    else if (name.trim() === "") return;
    else if (name && isEditing) {
      const newList = state.list.map((item) => {
        if (item.id === editID) {
          return { ...item, text: name };
        }
        return item;
      });
      setName("");
      setIsEditing(false);
      setEditID(null);
      dispatch({ type: "EDIT_ITEM", payload: newList });
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        text: name,
        checked: check,
      };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    }
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
      }
      return item;
    });
    dispatch({ type: "CHECK_ITEM", payload: checkedList });
  };

  const handleEdit = (id) => {
    const specificItem = state.list.find((item) => item.id === id);
    setEditID(id);
    setName(specificItem.text);
    setIsEditing(true);
    reference.current.focus();
  };

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("LIST", JSON.stringify(state.list));
    }
  }, [state.list]);

  useEffect(() => {
    if (state.list.length === 0) {
      dispatch({ type: "NO_VALUE" });
    }
  }, [state.list]);

  useEffect(() => {
    dispatch({
      type: "UPDATE_STATE",
      payload: JSON.parse(localStorage.getItem("LIST")),
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        reference,
        handleSubmit,
        handleDelete,
        handleCheck,
        handleEdit,
        ...state,
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
