import { InferValueTypes, User } from "types"

export const SET_LOGGED_USER = "SET_LOGGED_USER"
export const LOGOUT = "LOGOUT"

export const userActions = {
    fetchUser(user: User) {
        return {
            type: SET_LOGGED_USER,
            user
        }
    },
    logout() {
        return {
            type: LOGOUT,
            user: null
        }
    }
}

export type UserActions = ReturnType<InferValueTypes<typeof userActions>>