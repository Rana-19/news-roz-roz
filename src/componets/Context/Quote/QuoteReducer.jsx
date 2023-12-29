const QuoteReducer = (state, action) => {
    switch (action.type) {
        case "GET_QUOTE":
            return {
                ...state,
                quoteData: action.payload
            }

        default:
            state

    }
}
export default QuoteReducer