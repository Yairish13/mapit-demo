import RadioButton from '@components/RadioButton/RadioButton'
import styles from './RadiosAnswer.module.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

const RadiosAnswer = ({ handleCheck, selectedMembers, register }) => {
    const { t } = useTranslation()

    const arr = [...selectedMembers]
    const handleChange = (e) => {
        if (handleCheck) handleCheck(e);
    }
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">{t('global.monthly')}</th>
                    <th scope="col">{t('global.weekly')}</th>
                    <th scope="col">{t('global.daily')}</th>
                </tr>
            </thead>
            <tbody>
                {selectedMembers.map((worker, index) => (
                    <tr key={index}>
                        <td scope="row">{worker.value}</td>
                        <td className={styles.radioBtn}>
                            <RadioButton
                                id='monthly'
                                name={`questionNumberTwo${worker.id}`}
                                index={index}
                                onChange={(e) => handleChange(e)}
                                refs={{
                                    ...register(`questionNumberTwo`, {
                                        required: true,
                                    })
                                }}
                                checked={arr[index].questionNumberTwo}
                            />
                        </td>
                        <td className={styles.radioBtn}>
                            <RadioButton
                                id='weekly'
                                name={`questionNumberTwo${worker.id}`}
                                index={index}
                                onChange={(e) => handleChange(e)}
                                refs={{
                                    ...register(`questionNumberTwo`, {
                                        required: true,
                                    })
                                }}
                                checked={arr[index].questionNumberTwo}
                            />
                        </td>
                        <td className={styles.radioBtn}>
                            <RadioButton
                                id='daily'
                                name={`questionNumberTwo${worker.id}`}
                                index={index}
                                onChange={(e) => handleChange(e)}
                                refs={{
                                    ...register(`questionNumberTwo`, {
                                        required: true,
                                    })
                                }}
                                checked={arr[index].questionNumberTwo}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default RadiosAnswer