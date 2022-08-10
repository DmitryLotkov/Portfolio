import React from 'react';
import './App.scss';
import {Main} from "./Main/Main";
import {useAppSelector} from "./state/store";
import {RequestStatusType} from "./state/app-reducer";
import {Loader} from "./Common/components/Loader";



export function App() {
    const appStatus = useAppSelector<RequestStatusType>(state => state.appReducer.status);
    console.log(appStatus)

    return (
        <div className={"App"}>
            {appStatus === 'loading' && <Loader/>}
            <Main/>
        </div>
    );
}

export default App;
