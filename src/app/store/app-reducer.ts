import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { AppThunkDispatch } from '@/app';

const SERVICE_KEY = import.meta.env.VITE_EMAILJS_SERVICE_KEY as string;
const TMPL_KEY = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export type LoginParamsType = {
    email: string;
    name: string;
    message: string;
};

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

const SET_ERROR = 'APP/SET-ERROR';
const SET_STATUS = 'APP/SET-STATUS';

export type NullableType<T> = null | T;

type InitialStateType = {
    error: NullableType<string>;
    status: RequestStatusType;
};

const initialState: InitialStateType = {
    error: null,
    status: 'idle',
};

export const appReducer = (
    state: InitialStateType = initialState,
    action: AppActionsType
): InitialStateType => {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, error: action.error };
        case SET_STATUS:
            return { ...state, status: action.status };
        default:
            return state;
    }
};

// Actions
export const setAppErrorAC = (error: NullableType<string>) =>
    ({ type: SET_ERROR, error }) as const;
export const setAppStatusAC = (status: RequestStatusType) =>
    ({ type: SET_STATUS, status }) as const;

// Types
export type SetAppErrorType = ReturnType<typeof setAppErrorAC>;
export type SetAppStatus = ReturnType<typeof setAppStatusAC>;
export type AppActionsType = SetAppErrorType | SetAppStatus;

// Thunks
export const sendMessageTC = (mailData: LoginParamsType) => async (dispatch: AppThunkDispatch) => {
    dispatch(setAppStatusAC('loading'));

    try {
        const res = await emailjs.send(SERVICE_KEY, TMPL_KEY, mailData, PUBLIC_KEY);
        if (res.status === 200) {
            dispatch(setAppStatusAC('succeeded'));
            Swal.fire('Good job!', 'Your message successfully sent!', 'success');
        }
    } catch (e) {
        console.error(e);
        dispatch(setAppStatusAC('failed'));
    }
};
