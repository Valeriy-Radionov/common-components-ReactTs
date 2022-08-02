const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.loading}
        }
        default:
            return state
    }
}
type LoadingACType = {
    type: string,
    loading: boolean
}
export const loadingAC = (loading: boolean): LoadingACType => {
    return {
        type: "CHANGE_LOADING",
        loading: loading
    } as const
} // fix any