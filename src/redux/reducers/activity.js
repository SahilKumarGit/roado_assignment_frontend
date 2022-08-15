const initialState = "MAIN"
const activityStatus = (state = initialState, action) => {
    switch (action.type) {
        case "MAIN": return "MAIN"
        case "SEARCH": return "SEARCH"
        default: return state
    }
}
export default activityStatus