import {combineReducers} from 'redux'

// //! Add types

// const initialState = {

// }

// const myReducer =  (state = initialState, { type, payload }) => {
//     switch (type) {

//     case typeName:
//         return { ...state, ...payload }

//     default:
//         return state
//     }
// }
// const mySecondReducer =  (state = initialState, { type, payload }) => {
//     switch (type) {

//     case typeName:
//         return { ...state, ...payload }

//     default:
//         return state
//     }
// }


export default combineReducers({
    // firstState:myReducer,
    // secondState:mySecondReducer
    temp:function(){return true}
})