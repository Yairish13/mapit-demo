"use client"
import RadioButton from '@components/RadioButton/RadioButton'
import styles from './RadiosAnswerSurvey.module.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

const RadiosAnswerSurvey = ({ handleCheck, selectedMembers, register, name }) => {
    const { t } = useTranslation();
    const arr = selectedMembers && [...selectedMembers];

    return (
        selectedMembers ? (
            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">{t('global.irrelevant')}</th>
                        <th scope="col">{t('global.notAtAll')}</th>
                        <th scope="col">{t('global.slightly')}</th>
                        <th scope="col">{t('global.very')}</th>
                        <th scope="col">{t('global.veryMuch')}</th>
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
                                        id='חודשית'
                                        name={`${name}${worker.id}`}
                                        index={index}
                                        onChange={handleCheck}
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
                                        id='שבועית'
                                        name={`${name}${worker.id}`}
                                        index={index}
                                        onChange={handleCheck}
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
                                        id='יומית'
                                        name={`${name}${worker.id}`}
                                        index={index}
                                        onChange={handleCheck}
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
                                        id='יומית'
                                        name={`${name}${worker.id}`}
                                        index={index}
                                        onChange={handleCheck}
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
                                        id='יומית'
                                        name={`${name}${worker.id}`}
                                        index={index}
                                        onChange={handleCheck}
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
            </table>) : (
            <table>
                <thead>
                    <tr>
                        <th scope="col">{t('global.irrelevant')}</th>
                        <th scope="col">{t('global.notAtAll')}</th>
                        <th scope="col">{t('global.slightly')}</th>
                        <th scope="col">{t('global.very')}</th>
                        <th scope="col">{t('global.veryMuch')}</th>
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
                                    id='שבועית'
                                    name={name}
                                    onChange={handleCheck}
                                // refs={{
                                //     ...register(`questionNumberTwo`, {
                                //         required: true,
                                //     })
                                // }}
                                // checked={arr[index].questionNumberTwo}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='יומית'
                                    name={name}
                                    onChange={handleCheck}
                                // refs={{
                                //     ...register(`questionNumberTwo`, {
                                //         required: true,
                                //     })
                                // }}
                                // checked={arr[index].questionNumberTwo}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='יומית'
                                    name={name}
                                    onChange={handleCheck}
                                // refs={{
                                //     ...register(`questionNumberTwo`, {
                                //         required: true,
                                //     })
                                // }}
                                // checked={arr[index].questionNumberTwo}
                                />
                            </td>
                            <td className={styles.radioBtn}>
                                <RadioButton
                                    id='יומית'
                                    name={name}
                                    onChange={handleCheck}
                                // refs={{
                                //     ...register(`questionNumberTwo`, {
                                //         required: true,
                                //     })
                                // }}
                                // checked={arr[index].questionNumberTwo}
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