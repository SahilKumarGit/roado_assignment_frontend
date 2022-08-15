const initialState = {
    wordList: [],
    searchList: [],
    eachWordInfo: { view: false, data: {} }
}

export const getWordList = (state = initialState, action) => {
    switch (action.type) {
        case "LIST": return { ...state, wordList: action.payload || [] }
        default: return state
    }
}


export const getSearchList = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH": return { ...state, searchList: action.payload || [] }
        default: return state
    }
}


export const getEachWord = (state = initialState, action) => {
    switch (action.type) {
        case "VIEW": return { ...state, eachWordInfo: { view: action.payload ? true : false, data: action.payload || {} } }
        default: return { ...state, eachWordInfo: { view: false, data: {} } }
    }
}
