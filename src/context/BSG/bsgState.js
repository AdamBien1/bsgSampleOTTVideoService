import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import BsgReducer from "./bsgReducer"
import BsgContext from "./bsgContext"
import { LOGIN, GET_MEDIA_LIST, GET_MEDIA_PLAY_INFO, SET_LOADING } from "../types";

const BsgState = props => {
    const initialState = {
        // Login
        userData: {
            User: {
                Id: null,
                UserName: null,
                FullName: null,
                ClientRoles: [],
            },
            AuthorizationToken: {
                Token: undefined,
                TokenExpires: undefined,
            }
        },
        // GetMediaList
        mediaList: null,
        mediaPlayInfo: null,
        loading: false,
    }

    const [state, dispatch] = useReducer(BsgReducer, initialState);

    const login = async (username, password) => {
        const endpoint = "https://thebetter.bsgroup.eu/Authorization/SignIn"
        const headers = {
            "Content-Type": "application/json",
        };
        let body;

        if(username.length && password.length) {
            body = {
                Username: username,
                Password: password,
                Device: {
                    "PlatformCode": "WEB",
                    "Name": uuidv4(),
                }
            }
        } else {
            body = {
                Device: {
                    "PlatformCode": "WEB",
                    "Name": uuidv4(),
                }
            }
        }

        setLoading();
        
        let response = await fetch(endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })

        let data = await response.json();
        
        if(username.length && password.length && data.ErrorDetail) {
            alert(data.Message);
            return;
        } 

        dispatch({
            type: LOGIN,
            payload: data,
        })
    }

    const getMediaList = async (authToken) => {
        const endpoint = "https://thebetter.bsgroup.eu/Media/GetMediaList"
        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authToken
        }
        const body = {
            MediaListId: 5,
            IncludeCategories: false,
            IncludeImages: true,
            IncludeMedia: false,
            PageNumber: 1,
            PageSize: 15
        }

        setLoading();
        let response = await fetch(endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })

        let data = await response.json();

        dispatch({
            type: GET_MEDIA_LIST,
            payload: data,
        })
    }

    const getMediaPlayInfo = async (authToken, mediaId) => {
        const endpoint = "https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo"
        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authToken
        }
        const body = {
            MediaId: mediaId,
            StreamType: state.userData.User.FullName === "Anonymous user" ? "TRIAL" : "MAIN",
        }

        let response = await fetch(endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })

        let data = await response.json();
        
        if(data?.ErrorDetail) {
            alert(data.Message)
            return;
        }

        dispatch({
            type: GET_MEDIA_PLAY_INFO,
            payload: data,
        })
    }

    const setLoading = () => dispatch({ type: SET_LOADING });

    return <BsgContext.Provider
                value={{
                    userData: state.userData,
                    mediaList: state.mediaList,
                    mediaPlayInfo: state.mediaPlayInfo,
                    loading: state.loading,

                    login: login,
                    getMediaList: getMediaList,
                    getMediaPlayInfo: getMediaPlayInfo,
                }}
            >
                {props.children}
            </BsgContext.Provider>
}

export default BsgState;
