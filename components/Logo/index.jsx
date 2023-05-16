import styles from './Logo.module.scss';
import Image from 'next/image';
// import siteLogo from '@public/assets/images/mapitLogo.svg';
import SiteLogo from '../../public/assets/images/mapitLogo.svg';
import Link from 'next/link';

const Logo = (props) => {
  const {
    lng,
  } = props;

  console.log('SiteLogo', SiteLogo);

  return (
    <Link className={styles.logo} href={`/${lng}`}>
      <SiteLogo />
    </Link>
  )
}

export default Logo;