export const getUser = (providerData) => {
    return {
        type: "SET_USER",
        payload: providerData
    }
}