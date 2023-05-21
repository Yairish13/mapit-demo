import styles from './page.module.css'
import Terms from '@components/Terms/Terms';
import CustomSelect from '@components/CustomSelect/CustomSelect'
import { useTranslation } from '@app/i18n';
import Login from '@components/Login/Login';
import Stepper from '@components/Stepper/Stepper';
import CircleProgress from '@components/CircleProgress/CircleProgress';

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'translation')


  return (
    <div className={styles.aaa}>
      <CircleProgress
      // percentage={35}
      circleWidth="200"
       />

    </div>
  )
}

