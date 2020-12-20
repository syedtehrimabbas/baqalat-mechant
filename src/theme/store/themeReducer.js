import {base, colorOptions, lightTheme} from "./theme";

const initialState = {
    theme: {...base, ...lightTheme, ...colorOptions.blue}
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ACTION_TYPE":
            return;
        default:
            return state;
    }
};

export default themeReducer;