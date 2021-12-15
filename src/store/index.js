import { createStore,  } from 'redux';

const INITIAL_STATE = {
    user: '',
    password: '',
};

function weather(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
          return  {...state,user:action.user};
         
          case 'SET_TOKEN':
            return  {...state,password:action.password};
          default:
            return state;
        }

}
const store = createStore(weather)

export default store