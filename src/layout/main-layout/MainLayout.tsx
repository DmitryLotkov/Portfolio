import style from './MainLayout.module.scss';
import commonStyles from '@/common/styles/Box.module.scss';
import { SideBar } from '@/layout/sidebar';
import { AboutMe, Skills, Works, Contacts } from '@/sections';
import { Footer } from '@/layout/footer';
import { ScrollUpButton } from '@/common/components';

export function MainLayout() {
    return (
        <div className={style.mainLayout}>
            <SideBar />
            <main className={`${style.mainContent} ${commonStyles.shadow}`}>
                <AboutMe />
                <Skills />
                <Works />
                <Contacts />
                <Footer />
                <ScrollUpButton />
            </main>
        </div>
    );
}

export default MainLayout;
