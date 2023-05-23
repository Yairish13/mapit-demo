import CircleProgress from '@components/CircleProgress/CircleProgress';
import DefaultLayout from '@components/Layouts/Default/index.jsx'
import styles from './layout.module.css'


const layout = ({ children, params: {
    lng
} }) => {
    return (
        <>
            {/* <div className={styles.progressBar}><CircleProgress /></div> */}
            <DefaultLayout lng={lng}>

                {children}
            </DefaultLayout>
        </>
    )
}

export default layout;