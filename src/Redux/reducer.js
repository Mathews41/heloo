const initialState = {
    id:0,
    email:'',
    password:'',
}

const ADD_USER = 'ADD_USER'

export function addUser(userObj){
    return{
        type: ADD_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case ADD_USER:
            const { id,email, password } = payload
            return {...state, id, email, password}
            default:
                return state
    }
}