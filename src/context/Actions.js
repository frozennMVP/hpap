export const LoginStart = () => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCCESS",
    payload: user
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const LogOut = () => ({
    type: "LOGOUT"
})

export const UserUpdate = (user) => ({
    type: "USER_UPDATE",
    payload : user
})

export const UserDelete = () => {
    type: "USER_DELETE"
}
