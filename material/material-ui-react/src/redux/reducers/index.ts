import {combineReducers} from 'redux'

// //! Add types

// const initialState = {

// }

// const myReducer =  (state = initialState, action) => {
//     switch (action.type) {

//     case typeName:
//         return [...state,action.payload]

//     default:
//         return state
//     }
// }
// const mySecondReducer =  (state = [], action) => {
//     switch (action.type) {

//     case typeName:
//         return [...state,action.payload]

//     default:
//         return state
//     }
// }


export default combineReducers({
    // firstState:myReducer,
    // secondState:mySecondReducer
    temp:function(){return true}
})