import { fetchUser } from "../../utils/fetchLocalStorageData";
const userInfo = fetchUser();

const initialState = { user: userInfo };

const setUserReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export default setUserReducer;