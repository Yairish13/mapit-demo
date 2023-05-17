import Button from '@components/Button/Button'
import CustomSelect from '@components/CustomSelect/CustomSelect'
import React from 'react'
import styles from './page.module.css'
import TextInput from '@components/TextInput/TextInput'
import Checkbox from '@components/Checkbox/Checkbox'
import RadioButton from '@components/RadioButton/RadioButton'
import Checkmark from '@components/Checkmark/Checkmark'

const page = ({ lng }) => {
    return (
        <div className={styles.divAll} style={{ gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                כפתורים פעילים:
                <Button
                    mode='primary'
                >ראשי</Button>
                <Button
                    mode='secondary'
                >שני</Button>
                <Button
                    mode='tertiary'
                >שלישי</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                כפתורים לא פעילים:
                <Button
                    mode='primary'
                    disabled={true}
                >ראשי</Button>
                <Button
                    mode='secondary'
                    disabled
                >שני</Button>
                <Button
                    mode='tertiary'
                    disabled
                >שלישי</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <div className={styles.temp}>
                    <div>
                        <TextInput bottomText='סמס ישלח למספר טלפון זה, יש להזין את הקוד בשדה למטה.*' />
                    </div>
                    <div>אינפוט עם פלייסהולדר</div>
                </div>
                <div className={styles.temp}>
                    <div>
                        <TextInput value="+972502554747" bottomText='סמס ישלח למספר טלפון זה, יש להזין את הקוד בשדה למטה.*' />
                    </div>
                    <div>אינפוט עם ערך
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <div className={styles.temp}>
                    <div>
                        <Checkbox label='לקבל' checked={true} />
                    </div>
                    <div>
                        צקבוקס פעיל:
                    </div>
                </div>
                <div className={styles.temp}>
                    <div>
                        <Checkbox label='לקבל' checked={false} />
                    </div>
                    <div>
                        צקבוקס כבוי:
                    </div>
                </div>
                <div className={styles.temp}>
                    <div>
                        <RadioButton checked={true} />
                    </div>
                    <div>
                        רדיו כבוי:
                    </div>
                </div>
                <div className={styles.temp}>
                    <div>
                        <RadioButton checked={false} />
                    </div>
                    <div>
                        רדיו כבוי:
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Checkmark />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <div className={styles.select}>
                    <div>
                        סלקט ללא אייקון:
                    </div>
                    <div>
                        <CustomSelect
                            lng={lng}
                            placeholder={'בחר'}
                            withArrow={false}
                            withNoHeader={false}
                        // options={options}
                        />                    </div>
                </div>
                <div className={styles.select}>
                    <div>
                        סלקט ללא חלון פתיחה :
                    </div>
                    <div>
                        <CustomSelect
                            lng={lng}
                            placeholder={'בחר'}
                            withNoHeader={true}

                        // options={options}
                        />                  </div>
                </div>
                <div className={styles.select}>
                    <div>
                        סלקט עם אייקון:
                    </div>
                    <div>
                        <CustomSelect
                            lng={lng}
                            placeholder={'בחר'}
                            withArrow={true}
                        // options={options}
                        />                 </div>
                </div>


            </div>

        </div>
    )
}

export default page