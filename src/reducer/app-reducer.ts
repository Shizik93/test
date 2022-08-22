
import {appAPI} from "../API/app-API";
import {AppThunk} from "../store/store";

export type appStatusType = "idle" | "loading" | "succeeded" | "failed"
export type imagesType = {
    id: number
    url: string
}
export type currentImageType = {
    id: number
    url: string,
    comments: Array<commentType>
}
export type commentType = {
    id: number,
    text: string,
    date: number
}

export type initialStateType = {
    images: Array<imagesType>,
    currentImage: currentImageType
    status: appStatusType
}
const initialState: initialStateType = {
    images: [],
    currentImage: {} as currentImageType ,
    status: 'idle' as appStatusType

}
export type actionsType =
    ReturnType<typeof setImagesAC>
    | ReturnType<typeof setImageAndCommentsAC>
    | ReturnType<typeof sendCommentAC>
    | ReturnType<typeof setAppStatusAC>

export const appReducer = (state: initialStateType = initialState, action: actionsType) :initialStateType=> {
    switch (action.type) {
        case 'APP-REDUCER/SET-IMAGES': {
            return {...state, images: action.payload}
        }
        case 'APP-REDUCER/SET-IMAGE-AND-COMMENTS': {
            return {...state, currentImage: action.payload}
        }
        case 'APP-REDUCER/SEND-COMMENT': {
            return {...state,
                currentImage: {
                ...state.currentImage,
                    comments:[...state.currentImage.comments,action.payload]}}
        }
        case 'APP-REDUCER/SET-APP-STATUS': {
            return {...state, status: action.status}
        }

        default: {
            return state
        }
    }
}
export const setImagesAC = (payload: Array<imagesType>) => {
    return {
        type: 'APP-REDUCER/SET-IMAGES',
        payload
    } as const
}
export const setImageAndCommentsAC = (payload: currentImageType) => {
    return {
        type: 'APP-REDUCER/SET-IMAGE-AND-COMMENTS',
        payload
    } as const
}

export const sendCommentAC = (comment: string) => {
    return {
        type: 'APP-REDUCER/SEND-COMMENT',
        payload:{
            id: Math.random(),
            text: comment,
            date: 46556
        }

    } as const
}
export const setAppStatusAC = (status: appStatusType) => {
    return {
        type: 'APP-REDUCER/SET-APP-STATUS',
        status
    } as const

}
export const getImagesTC = (): AppThunk => async (dispatch) => {

    dispatch(setAppStatusAC('loading'))
    try {
        const images = await appAPI.getImages()
        dispatch(setImagesAC(images.data))
        dispatch(setAppStatusAC('succeeded'))
    } catch {
        dispatch(setAppStatusAC('failed'))
        throw Error

    }

}
export const getCurrentImageTC = (id: number): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const currentImage = await appAPI.getImageAndComments(id)
        dispatch(setImageAndCommentsAC(currentImage.data))
        dispatch(setAppStatusAC('succeeded'))
    } catch {
        dispatch(setAppStatusAC('failed'))
        throw Error

    }
}
export const sendCommentTC = (id: number, comment: string): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        await appAPI.sendComment(id, comment)
        dispatch(sendCommentAC(comment))
        dispatch(setAppStatusAC('succeeded'))


    } catch {
        dispatch(setAppStatusAC('failed'))
        throw Error

    }
}

