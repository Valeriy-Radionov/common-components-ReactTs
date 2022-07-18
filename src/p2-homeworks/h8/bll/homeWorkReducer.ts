import {InitialStateType} from "./tests/homeWorkReducer.test";

type ActionType = {
    type: "sort",
    payload: "up" | "down"
} | {
    type: "check",
    payload: 18
}
export const homeWorkReducer = (state: InitialStateType[], action: ActionType): InitialStateType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)]
            return action.payload === "up" ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
