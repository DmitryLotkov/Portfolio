import { Fade } from 'react-awesome-reveal';
import styles from './contacts-block.module.scss';
import commonStyle from '@/shared/styles/typography.module.scss';
import { SendMessageForm } from '@/features/send-message';
import { titles } from '@/shared/config';

export function ContactsBlock() {
    return (
        <section className={styles.contacts} id="contacts">
            <div className={styles.contactsContainer}>
                <div className={styles.title}>
                    <Fade direction="down" duration={1200} triggerOnce>
                        <h2 className={commonStyle.h2}>{titles.title4}</h2>
                    </Fade>
                </div>
                <div className={styles.formContainer}>
                    <Fade direction="up" duration={1200} triggerOnce>
                        <SendMessageForm />
                    </Fade>
                </div>
            </div>
        </section>
    );
}
