import { createStore, combineReducers } from 'redux'

const createPolicy = (name: string, amount: number) => {
    return {
        type: 'CREATE_FORM',
        payload: {
            name: name,
            amount: amount
        }
    }
}

const deleteForm = (name: string) => {
    return {
        type: 'DELETE_FORM',
        payload: {
            name: name,
        }
    }
}

const createClaim = (name: string, amountToGet: number) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountToGet: amountToGet
        }
    }
}

// Reducers!

const claimHistory = (oldListOfClaims = [], action:any) => {
    if (action.type === 'CREATE_CLAIM') {
        // we care about that action
        return [...oldListOfClaims, action.payload]
    }
    // we dont care about that action
    return oldListOfClaims
}

const accounting = (bagOfMoney: number = 100, action:any) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountToGet
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amountToGet
    }
    return bagOfMoney
}

const policies = (listOfPolicies = [], action:any) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name]
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name)
    }
    return listOfPolicies
}

const ourDepartments = combineReducers({
    accounting,
    claimHistory,
    policies
})

const store = createStore(ourDepartments)

const action = createPolicy('Alex', 20)

store.dispatch(action)

console.log(store.getState());
