import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {AppActionsType, appReducer} from "./app-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';




const rootReducer = combineReducers({
    appReducer: appReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootActionsType = AppActionsType
export type AppThunkDispatch = ThunkDispatch<AppStoreType, null, RootActionsType>;
export type AppStoreType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;
export const useAppDispatch: () => AppThunkDispatch = useDispatch;

export default store

