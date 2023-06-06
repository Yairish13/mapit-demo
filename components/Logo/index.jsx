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
    <div className={styles.logo} href='' alt={logo ? 'logo gilboa': 'logo Mapit'}>
      {logo ? logo : <SiteLogo />}
    </div>
  )
}

export default Logo;