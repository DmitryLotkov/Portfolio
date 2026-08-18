import style from './home-page.module.scss';
import commonStyles from '@/shared/styles/box.module.scss';
import { SideBar, AboutMe, SkillsBlock, WorksBlock, ContactsBlock, Footer } from '@/widgets';
import { ScrollUpButton } from '@/features/scroll-to-top';

export function HomePage() {
    return (
        <div className={style.homePage}>
            <SideBar />
            <main className={`${style.mainContent} ${commonStyles.shadow}`}>
                <AboutMe />
                <SkillsBlock />
                <WorksBlock />
                <ContactsBlock />
                <Footer />
                <ScrollUpButton />
            </main>
        </div>
    );
}

export default HomePage;
