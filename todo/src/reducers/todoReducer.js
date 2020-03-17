

export const initialState = 
{  stateArray:  [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },]
}


export const reducer = (state, action) => {
    console.log('thisis state', state, 'this is action', action);
    switch(action.type) {
    case "NEW_TODO_ADDED": 
    return {
        ...state,
        stateArray: state.stateArray.push({
            item: action.payload, 
            completed:false,
            id: Date.now() 
        })
      };
        default: return state;
    }
}