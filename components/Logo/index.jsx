import styles from './Logo.module.scss';
import Image from 'next/image';
import SiteLogo from '../../public/assets/images/mapitLogo.svg';
import Link from 'next/link';

const Logo = (props) => {
  const {
    lng,
    logo,
    t,
  } = props;


  return (
    <div className={styles.logo} href='' alt={logo ? t('general.logoGilboa') : t('general.logoMapit')}>
      {logo ? logo : <SiteLogo />}
    </div>
  )
}

export default Logo;