export const initialUserState = {
  isLoggedIn: false,
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("login");
      return { ...state, user: action.payload.user };

    case "LIKE_VIDEO":
      return state;

    // break;
    default:
      return state;
  }
};

export default UserReducer;
