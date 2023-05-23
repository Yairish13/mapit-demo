import styles from './Logo.module.scss';
import Image from 'next/image';
import SiteLogo from '../../public/assets/images/mapitLogo.svg';
import Link from 'next/link';

const Logo = (props) => {
  const {
    lng,
    logo,
  } = props;


  return (
    <Link className={styles.logo} href={`/${lng}`}>
      {logo ? logo : <SiteLogo />}
    </Link>
  )
}

export default Logo;