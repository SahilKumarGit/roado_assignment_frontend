export const mainActivity = () => {
    return {
        type: "MAIN"
    }
}

export const searchActivity = () => {
    return {
        type: "SEARCH"
    }
}

export const setWordList = (payload) => {
    return {
        type: "LIST",
        payload: payload
    }
}

export const setSearchList = (payload) => {
    return {
        type: "SEARCH",
        payload: payload
    }
}



export const setEachWordInfo = (payload) => {
    return {
        type: "VIEW",
        payload: payload
    }
}

