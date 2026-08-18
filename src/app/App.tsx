import './app.scss';
import { HomePage } from '@/pages';
import { useAppSelector, RequestStatusType } from '@/app/store';
import { Loader } from '@/shared/ui';

export function App() {
    const appStatus = useAppSelector<RequestStatusType>((state) => state.appReducer.status);

    return (
        <div className="App">
            {appStatus === 'loading' && <Loader />}
            <HomePage />
        </div>
    );
}

export default App;
