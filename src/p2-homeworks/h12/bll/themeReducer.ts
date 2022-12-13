export type StateType = {
    theme: string
}

type changeThemeAT = ReturnType<typeof changeThemeC>

type ActionType = changeThemeAT

const initState = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any

    switch (action.type) {

        case 'THEME': {
            return {...state, theme: action.themeColor};
        }
        default:
            return state;
    }
};

export const changeThemeC = (themeColor: string) => ({type: 'THEME', themeColor} as const)