const reducer = (state, action) => {
  const newList = [...state.list, action.payload];

  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, list: newList, content: "" };

    case "NO_VALUE":
      return { ...state, content: "there is no item" };

    case "DELETE_ITEM":
      return { ...state, list: action.payload };

    case "CHECK_ITEM":
      return { ...state, list: action.payload };

    case "EDIT_ITEM":
      return { ...state, list: action.payload };

    case "UPDATE_STATE":
      return { ...state, list: action.payload, content: "" };

    default:
      throw new Error(`there is no action type match ${action.type}`);
  }
};

export default reducer;
