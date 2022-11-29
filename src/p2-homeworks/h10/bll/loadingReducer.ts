export type StateType = {
    loading: boolean
}

type LoadingAT = ReturnType<typeof loadingAC>

type ActionType = LoadingAT

const initState: StateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: !state.loading}
        }
        default:
            return state
    }
}

export const loadingAC = () => ({type: 'LOADING'} as const) // fix any