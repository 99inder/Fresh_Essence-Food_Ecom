export const setUser = (providerData) => {
    return {
        type: "SET_USER",
        payload: providerData
    }
}

export const getFoodItems = (data) => {
    return {
        type: "GET_FOOD_ITEMS",
        foodItems: data
    }
}