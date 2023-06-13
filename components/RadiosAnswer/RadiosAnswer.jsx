import RadioButton from '@components/RadioButton/RadioButton'
import styles from './RadiosAnswer.module.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

const RadiosAnswer = ({ handleCheck, selectedMembers, register, name, setValue }) => {
    const { t } = useTranslation()

    const arr = [...selectedMembers]
    const handleChange = (e, index, name, workerId) => {
        setValue(`${name}_${workerId}`, true);
        if (handleCheck) handleCheck(e, name, index);
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
                                    name={`${name}_${worker.id}`}
                                    index={index}
                                    onChange={(e) => { handleChange(e, index, name, worker.id) }}
                                    refs={{
                                        ...register(`${name}_${worker.id}`, {
                                            required: true,
                                        })
                                    }}
                                    checked={arr[index].questionNumberTwo}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='weekly'
                                    name={`${name}_${worker.id}`}
                                    index={index}
                                    // onChange={(e) => handleChange(e)}
                                    onChange={(e) => { handleChange(e, index, name, worker.id) }}
                                    refs={{
                                        ...register(`${name}_${worker.id}`, {
                                            required: true,
                                        })
                                    }}
                                    // register={register}
                                    checked={arr[index].questionNumberTwo}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='daily'
                                    name={`${name}_${worker.id}`}
                                    index={index}
                                    // onChange={(e) => handleChange(e)}
                                    onChange={(e) => { handleChange(e, index, name, worker.id) }}

                                    refs={{
                                        ...register(`${name}_${worker.id}`, {
                                            required: true,
                                        })
                                    }}
                                    // register={register}
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