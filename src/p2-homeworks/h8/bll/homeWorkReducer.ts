import {UserType} from "../HW8";

type SortActionType = {
    type: 'sort',
    payload: 'up' | 'down'
}
type CheckActionType = {
    type: 'check',
    payload: number
}

type ActionTypes = SortActionType | CheckActionType

export const homeWorkReducer = (state: UserType[], action: ActionTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let newState = [...state]
            if (action.payload === 'up') {
                return newState.sort((a, b) => a.age - b.age)
            } else if (action.payload === 'down') {
                return newState.sort((a, b) => b.age - a.age)
            }
            return state
        }
        case 'check': {
            // need to fix
            return [...state].filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}