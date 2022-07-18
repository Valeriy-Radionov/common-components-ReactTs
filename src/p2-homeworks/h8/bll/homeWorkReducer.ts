import {InitialStateType} from "./tests/homeWorkReducer.test";

export const homeWorkReducer = (state: InitialStateType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))]
        }
        case 'check': {
            // need to fix
            return state
        }
        default:
            return state
    }
}

type ActionType = sortActionType | checkActionType

type sortActionType = ReturnType<typeof sortAction>

const sortAction = () => {
    return {
        type: "sort",
        payload: "up"
    } as const
}
type checkActionType = ReturnType<typeof checkAction>
const checkAction = () => {
    return {
        type: "check",
        payload: 18
    } as const
}