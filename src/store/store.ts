import {applyMiddleware, combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux'
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {actionsType, appReducer} from "../reducer/app-reducer";


const rootReducer = combineReducers({
    app: appReducer,

})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStateType = ReturnType<typeof store.getState>
export type AppActionsType = actionsType


export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionsType>

