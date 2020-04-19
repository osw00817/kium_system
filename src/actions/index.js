export const add = (name) => {
    return {
        type: 'ADD',
        name
    }
}

export const password = (password) => {
    return {
        type: 'PASSWORD',
        password
    }
}