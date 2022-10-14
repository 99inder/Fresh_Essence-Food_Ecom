const initialState = null;

const getFoodItemsReducer = (state = initialState, action) => {

    console.log(action);

    switch (action.type) {
        case "GET_FOOD_ITEMS":
            return {
                ...state,
                foodItems: action.foodItems
            }
        default:
            return state;
    }
};

export default getFoodItemsReducer;