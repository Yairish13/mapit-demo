// "use client"
// import Button from '@components/Button/Button'
// import TextInput from '@components/TextInput/TextInput'
// import styles from './BeforeForm.module.css'
// import { useTranslation } from '@app/i18n/client'

// const BeforeForm =  ({ lng }) => {
//     const { t } =  useTranslation(lng)

//     return (
//         <div className={styles.leftScreen}>
//             <h2 className={styles.leftHeader}>{t('hello')}</h2>
//             <div>
//                 {/* {t('textOne')} */}
//             </div>
//             <br />
//             <div>
//                 {t('textTwo')}
//             </div>
//             <br />
//             <div>
//                 {t('textThree')}
//             </div>
//             <br />
//             <div>
//                 {t('textFour')}
//             </div>
//             <ul>
//                 <li>
//                     {t('ulOne')}
//                 </li>
//                 <li>
//                     {t('ulTwo')}
//                 </li>
//                 <li>
//                     {t('ulThree')}
//                 </li>
//                 <li>
//                     {t('ulFour')}
//                 </li>
//             </ul>
//             <br />
//             <div>
//                 {t('textFive')}
//             </div>
//             <div>
//                 {t('textSix')}
//                 {t('textSeven')}
//             </div>
//             <br />
//             <div>
//                 {t('textEight')}
//             </div>
//             <br />
//             <TextInput
//                 placeholder={t('nameExp')}
//                 bottomText={t('name')}
//             />
//             <br />
//             <TextInput
//                 placeholder={t('positionExp')}
//                 bottomText={t('position')}
//             />
//             <br />
//             <Button
//              mode="tertiary">
//                 {t('start')}
//             </Button>
//             <div className={styles.takanon}>
//                 © {t('takanon')}
//             </div>
//         </div>
//     )
// }

// export default BeforeForm