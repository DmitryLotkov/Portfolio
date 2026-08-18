import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import style from './sidebar.module.scss';
import { NameAndProf } from './name-and-prof';
import { ContactBlock } from './contact-block';
import Avatar from '@/shared/assets/images/my-photo.jpg';
import { Button } from '@/shared/ui';

export function SideBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            const scrolled = window.scrollY > 80;
            setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
        };
        window.addEventListener('scroll', scrollHandler, { passive: true });
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <aside className={style.aside}>
            <div className={style.slideBlock}>
                <div className={style.nameAvatar}>
                    <Tilt>
                        <img
                            className={isScrolled ? style.avatarActive : style.avatar}
                            src={Avatar}
                            alt="avatar"
                        />
                    </Tilt>
                    <NameAndProf />
                </div>
                <ContactBlock />
                <Button
                    as="a"
                    href="https://mega.nz/file/gtIVEKbK#CSzKbsPPHF7LI2C7UvO9AH0gaAPK2FQbVx8wnWq7Gq4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span style={{ marginRight: '10px' }}>
                        <FontAwesomeIcon icon={faArrowAltCircleDown} />
                    </span>
                    Download CV
                </Button>
            </div>
        </aside>
    );
}

export default SideBar;
