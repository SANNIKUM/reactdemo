import * as types from "./actionTypes";
import fetchUsersAsync from "../../api";
export function addUser(user){
    return{
        type:types.ADD_USER,
        user
    }
}

export function fetchUsers(users){
    return {
        type:types.FETCH_USERS,
        users
    }
}

export function editUser(user){
    return {
        type:types.EDIT_USER,
        user
    }
}

export function removeUser(id){
    return {
        type:types.REMOVE_USER,
        id
    }
}


export function fetchUsersAPI(){
    return function(dispatch){
    return fetchUsersAsync().then((users)=>{
        dispatch(fetchUsers(users))
    })
  }
}