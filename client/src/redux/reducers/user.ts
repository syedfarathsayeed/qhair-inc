import { UserActions } from "redux/actions/user"
import { AppState } from "redux/store"
import { User } from "types"

interface UserState {
    loggedUser: User | null
}

const initialState: UserState = {
    loggedUser: null
}

export default function user(
    state: UserState = initialState,
    action: UserActions
): UserState {
    switch (action.type) {
        case "SET_LOGGED_USER":
            return {
                ...state,
                loggedUser: action.user
            }
        case "LOGOUT": 
            return {
                ...state,
                loggedUser: action.user
            }
        default:
            return state
    }
}

export const selectUser = ({ user }: AppState): User | null => {
    return user.loggedUser
}