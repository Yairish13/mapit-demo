import styles from './page.module.css'
import Terms from '@components/Terms/Terms';
import CustomSelect from '@components/CustomSelect/CustomSelect'
import { useTranslation } from '@app/i18n';
import Login from '@components/Login/Login';
import TwoRadio from '@components/TwoRadio/TwoRadio';

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'translation')


  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
      {/* <div>      <CustomSelect
        lng={lng}
        placeholder={t('select')}
        withArrow={false}
        withNoHeader={false}
      // options={options}
      /></div>
      <div>      <CustomSelect
        lng={lng}
        placeholder={t('select')}
        withNoHeader={true}

      // options={options}
      /></div>
      <div>
        <TwoRadio />
      </div>
      <div>      <CustomSelect
        lng={lng}
        placeholder={t('select')}
        withArrow={true}
      // options={options}
      /></div> */}

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
