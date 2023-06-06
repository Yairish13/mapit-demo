import Logo from '@components/Logo'
import styles from './Loader.module.css'
const Loader = () => {
    return (
        <div className={styles.loader}>
            <Logo />
        </div>
    )
}

export default Loader