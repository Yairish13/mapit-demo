import styles from './page.module.css'
import Terms from '@components/Terms/Terms';
import CustomSelect from '@components/CustomSelect/CustomSelect'
import { useTranslation } from '@app/i18n';
import Login from '@components/Login/Login';

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'translation')


  return (
    <div>
      {/* <CustomSelect
        lng={lng}
        placeholder={t('select')}
        options={options}
      /> */}
      <Login
      lng={lng}
       />
    </div>
  )
}
//   return (
//     <main className={styles.main}>
//       <Terms />
//       <CustomSelect
//         lng={lng}
//         placeholder={t('select')}
//         options={options}
//       />
//     </main>
//   )
// }
