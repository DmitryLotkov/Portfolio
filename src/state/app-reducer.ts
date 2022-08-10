
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

//status = loading - крутилку показываем

const SET_ERROR = "APP/SET-ERROR"
const SET_STATUS = "APP/SET-STATUS"


const initialState = {
    error: null as NullableType<string>,
    status: 'idle' as RequestStatusType,

}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.error}
        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state
    }
}
//actions
export const setAppErrorAC = (error: NullableType<string>) => ({type: SET_ERROR, error}) as const;
export const setAppStatusAC = (status: RequestStatusType) => ({ type: SET_STATUS, status} as const);

//types
export type NullableType<T> = null | T
type InitialStateType = typeof initialState
export type SetAppErrorType = ReturnType<typeof setAppErrorAC>
export type SetAppStatus = ReturnType<typeof setAppStatusAC>


export type AppActionsType = SetAppErrorType | SetAppStatus

//thunks

