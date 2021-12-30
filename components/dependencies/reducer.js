const reducer = (state, action) => {
  const newList = [...state.list, action.payload];
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, list: newList, isEmpty: false, content: "" };
    case "NO_VALUE":
      return { ...state, isEmpty: true, content: "there is no item" };
    case "DELETE_ITEM":
      return { ...state, list: action.payload };
    case "CHECK_ITEM":
      return { ...state, list: [...list, action.payload] };
    default:
      throw new Error(`there is no action type match ${action.type}`);
  }
};

export default reducer;
