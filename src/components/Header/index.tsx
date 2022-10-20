import styles from './styles.module.scss';
import Image from 'next/image';
import { ActiveLink } from '../Activelink'
import logo from '../../../public/images/logo.svg';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a>
                        <Image src={logo} alt='Sujeito Programador Logo' />
                    </a>
                </ActiveLink>

                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <a>Conteúdos</a>
                    </ActiveLink>
                    <ActiveLink href="/sobre" activeClassName={styles.active}>
                        <a>Quem somos?</a>
                    </ActiveLink>
                </nav>
                <a className={styles.redyButton} type="button" href='https://www.google.com.br'>COMEÇAR</a>
            </div>
        </header>
    )
}