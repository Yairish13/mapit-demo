"use client"
import RadioButton from '@components/RadioButton/RadioButton'
import styles from './RadiosAnswerSurvey.module.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

const RadiosAnswerSurvey = ({ handleCheck, selectedMembers, register, name, setValue, required }) => {
    const { t } = useTranslation();
    const arr = selectedMembers && [...selectedMembers];
    const handleChange = (e, name, index, workerId) => {
        if (workerId) {
            setValue(`${name}_${workerId}`, true);
            if (handleCheck) handleCheck(e, name, index);
        }
        else handleCheck(e, name)
    }
    return (
        selectedMembers ? (
            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">
                            <div className={styles.thTextNot}>{t('global.irrelevant')}</div>
                        </th>
                        <th scope="col">
                            <div className={styles.thTextNot}>{t('global.notAtAll')}</div>
                        </th>
                        <th scope="col">
                            <div className={styles.thText}>{t('global.slightly')}</div>
                        </th>
                        <th scope="col">
                            <div className={styles.thText}>{t('global.very')}</div>
                        </th>
                        <th scope="col">
                            <div className={styles.thText}>{t('global.veryMuch')}</div>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col"></th>
                        <th className={styles.tableHeader} scope="col">0</th>
                        <th className={styles.tableHeader} scope="col">1</th>
                        <th className={styles.tableHeader} scope="col">2</th>
                        <th className={styles.tableHeader} scope="col">3</th>
                        <th className={styles.tableHeader} scope="col">4</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedMembers.map((worker, index) => (
                        <tr key={index}>
                            <td scope="row">{worker.value}</td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='0'
                                    name={`${name}_${worker.id}`}
                                    index={index}
                                    onChange={(e) => handleChange(e, name, index, worker.id)}
                                    refs={{
                                        ...register(`${name}_${worker.id}`, {
                                            required,
                                        })
                                    }}
                                    checked={arr[index].name}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='1'
                                    name={`${name}_${worker.id}`}
                                    index={index}
                                    onChange={(e) => handleChange(e, name, index, worker.id)}
                                    refs={{
                                        ...register(`${name}_${worker.id}`, {
                                            required,
                                        })
                                    }}
                                    checked={arr[index].name}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='2'
                                    name={`${name}_${worker.id}`}
                                    index={index}
                                    onChange={(e) => handleChange(e, name, index, worker.id)}
                                    refs={{
                                        ...register(`${name}_${worker.id}`, {
                                            required,
                                        })
                                    }}
                                    checked={arr[index].name}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='3'
                                    name={`${name}_${worker.id}`}
                                    index={index}
                                    onChange={(e) => handleChange(e, name, index, worker.id)}
                                    refs={{
                                        ...register(`${name}_${worker.id}`, {
                                            required,
                                        })
                                    }}
                                    checked={arr[index].name}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='4'
                                    name={`${name}_${worker.id}`}
                                    index={index}
                                    onChange={(e) => handleChange(e, name, index, worker.id)}
                                    refs={{
                                        ...register(`${name}_${worker.id}`, {
                                            required,
                                        })
                                    }}
                                    checked={arr[index].name}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>) : (
            <table>
                <thead>
                    <tr>
                        <th scope="col">
                            <div className={styles.thTextNot}>{t('global.notAtAll')}</div>
                        </th>
                        <th scope="col">
                            <div className={styles.thText}>{t('global.slightly')}</div>
                        </th>
                        <th scope="col">
                            <div className={styles.thText}>{t('global.very')}</div>
                        </th>
                        <th scope="col">
                            <div className={styles.thText}>{t('global.veryMuch')}</div>
                        </th>
                    </tr>
                    <tr>
                        <th className={styles.tableHeader} scope="col">1</th>
                        <th className={styles.tableHeader} scope="col">2</th>
                        <th className={styles.tableHeader} scope="col">3</th>
                        <th className={styles.tableHeader} scope="col">4</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        <tr>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='1'
                                    name={name}
                                    onChange={(e) => handleChange(e, name)}
                                    refs={{
                                        ...register(`${name}`, {
                                            required,
                                        })
                                    }}
                                // checked={arr[index].name}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='2'
                                    name={name}
                                    onChange={(e) => handleChange(e, name)}
                                    refs={{
                                        ...register(`${name}`, {
                                            required,
                                        })
                                    }}
                                // checked={arr[index].name}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='3'
                                    name={name}
                                    onChange={(e) => handleChange(e, name)}
                                    refs={{
                                        ...register(`${name}`, {
                                            required,
                                        })
                                    }}
                                // checked={arr[index].name}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='4'
                                    name={name}
                                    onChange={(e) => handleChange(e, name)}
                                    refs={{
                                        ...register(`${name}`, {
                                            required,
                                        })
                                    }}
                                // checked={arr[index].name}
                                />
                            </td>
                        </tr>
                    </>
                </tbody>
            </table>
        )
    )
}

export default RadiosAnswerSurvey