import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { AppActionsType, appReducer } from './app-reducer';

const rootReducer = combineReducers({
    appReducer: appReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootActionsType = AppActionsType;
export type AppStoreType = ReturnType<typeof rootReducer>;
export type AppThunkDispatch = ThunkDispatch<AppStoreType, null, RootActionsType>;

export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;
export const useAppDispatch: () => AppThunkDispatch = useDispatch;

export default store;
