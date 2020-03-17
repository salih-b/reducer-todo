

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
            // ...state,
            stateArray: [...state.stateArray, {
                item: action.payload, 
                completed:false,
                id: Date.now() 
            }]
        };
      case 'COMPLETED_TOGGLED' :
          return {
            ...state,
            stateArray: state.stateArray.map((todo)=>{
                if(todo.id === action.payload) {
                    return{
                      ...todo, 
                      completed:!todo.completed
                    };
                  } else {
                    return todo;
                  }
            })
          }
          case 'CLEAR_COMPLETED':
              return {
                ...state, 
                stateArray: state.stateArray.filter(todo => !todo.completed)
              }
        default: return state;
    }
}