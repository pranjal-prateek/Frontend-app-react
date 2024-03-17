export const initialValue = {
    username: '',
    password: '',
    error: '',
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'username':
        return { ...state, username: action.payload };
      case 'password':
        return { ...state, password: action.payload };
      case 'error':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  