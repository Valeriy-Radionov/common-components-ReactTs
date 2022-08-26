const initState = {
    type: ["aqua"]
}
const THEME = "THEME"
export const themeReducer = (state = initState, action: ActionType): typeof initState => {
    switch (action.type) {
        case "THEME": {
            return {...state, type: [action.typeTheme]}
        }
        default:
            return state
    }
}

type ActionType = themeACType

type themeACType = {
    type: string,
    typeTheme: string
}
export const themeAC = (typeTheme: string): themeACType => {
    return {
        type: THEME,
        typeTheme
    } as const
}