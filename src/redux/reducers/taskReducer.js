const initialState = {
  loading: false,
  tasks: [],
  error: "",
}

export const taskReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case 'GET_TASKS':
        return action.payload || false;
    case 'ADD_TASK':
        return [ ...state, action.payload ];
    case 'DEL_TASK':
        return state = state.filter(({ id }) => id !== action.payload);
    case 'UPDATE_TASK':
        return [ ...state, action.payload ];
    default: 
        return state;
  }
};
