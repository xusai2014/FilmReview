const initialState = {
    articles:[]
}


export function ArticleReducer (state = initialState, action) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        case "SET_NAME":
            return {
                ...state,
                articles:action.name
            }
        default:
            return state;
    }
}
