const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                isDark: state.isDark ? false : true
            }



        default:
            break;
    }

}

export default ThemeReducer