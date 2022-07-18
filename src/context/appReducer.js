import appActions from "./appActions";

export default function appReducer(prevState, action) {
  console.log("Incoming change");
  console.log(action);
  switch (action.type) {
    case appActions.CHANGE_PAGE:
      return {
        ...prevState,
        currentPage: action.payload,
      };

    case appActions.CHANGE_ANSWER:
      return {
        ...prevState,
        answer: {
          ...prevState.answer,
          ...action.payload,
        },
      };

    default:
      return prevState;
  }
}
