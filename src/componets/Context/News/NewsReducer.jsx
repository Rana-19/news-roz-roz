const NewsReducer = (state, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                allNews: action.payload
            }




        default:
            state;
    }

}

export default NewsReducer