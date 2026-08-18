import './App.scss';
import { MainLayout } from '@/layout';
import { useAppSelector, RequestStatusType } from '@/app/store';
import { Loader } from '@/common/components';

export function App() {
    const appStatus = useAppSelector<RequestStatusType>((state) => state.appReducer.status);

    return (
        <div className="App">
            {appStatus === 'loading' && <Loader />}
            <MainLayout />
        </div>
    );
}

export default App;
