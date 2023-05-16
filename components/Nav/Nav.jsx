"use client"
import styles from './Nav.module.css';
import mapitLogo from '@public/assets/images/mapitLogo.svg'
import Image from "next/image";

const Nav = () => {
    return (
        <nav>
            <Image className={styles.logo} src={mapitLogo.src} alt="" width="100" height="100" />
        </nav>
    )
}

export default Nav