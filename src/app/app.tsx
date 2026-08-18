import './app.scss';
import { HomePage } from '@/pages';
import { useSendMessageMutation, CONTACT_MESSAGE_CACHE_KEY } from '@/shared/api';
import { Loader } from '@/shared/ui';

export function App() {
    const [, { isLoading }] = useSendMessageMutation({
        fixedCacheKey: CONTACT_MESSAGE_CACHE_KEY,
    });

    return (
        <div className="App">
            {isLoading && <Loader />}
            <HomePage />
        </div>
    );
}
