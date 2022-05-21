export const initialAppState = {
  showLoginOverlay: false,
};

const AppReducer = (state, action) => {
  // Switch on all the action types
  switch (action.type) {
    case "ACTION_REQUIRES_AUTH":
      return { ...state, showLoginOverlay: true };

    // Close the login overlay
    case "CLOSE_OVERLAY":
      return { ...state, showLoginOverlay: false };

    // Open the login overlay
    case "OPEN_OVERLAY":
      return { ...state, showLoginOverlay: true };

    default:
      return state;
  }
};

export default AppReducer;
