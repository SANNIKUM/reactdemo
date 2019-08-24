import * as types from "../action/actionTypes";
import initialState from "../InitialState";

export default function userReducer(state=initialState, action){
    switch(action.type){
        case types.ADD_USER:
            debugger
            if(action.user.id == null || action.user.id == "undefined" ){
                var id=[];
                state.users.forEach(user => {
                    id.push(user.id);

                });
                action.user.id = Math.max(...id)+1;
                let newState = {...state};
                newState.user =  {...initialState.user};
                newState.users.push(action.user)
               return newState;
            }
            else{
                let newState = {...state};
                newState.users.forEach(user => {
                    if(user.id == action.user.id){
                        user = {...action.user}
                    }
                });
                return newState;
            }
            case types.FETCH_USERS:
                return Object.assign({},state,{users:[...action.users]})
            default:
                return state;
    }
}