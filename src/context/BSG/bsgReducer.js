import { GET_MEDIA_LIST, LOGIN, GET_MEDIA_PLAY_INFO, SET_LOADING } from "../types";

const bsgReducer = (state, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                userData: action.payload,
                loading: false,
            }
        case GET_MEDIA_LIST: {
            return {
                ...state,
                mediaList: action.payload,
                loading: false,
            }
        }
        case GET_MEDIA_PLAY_INFO: {
            return {
                ...state,
                mediaPlayInfo: action.payload,
                loading: false,
            }
        }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}

export default bsgReducer;