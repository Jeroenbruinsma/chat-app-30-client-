export const ADD_MESSAGES = 'ADD_MESSAGES'
export const JWT = 'JWT'
export const addMessages = (payload) => ({
    type: ADD_MESSAGES,
    payload
})

export const login = (payload) => ({
    type: JWT,
    payload
})

