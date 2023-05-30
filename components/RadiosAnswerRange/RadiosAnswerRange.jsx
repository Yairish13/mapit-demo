import RadioButton from '@components/RadioButton/RadioButton'
import styles from './RadiosAnswerRange.module.css'
import React from 'react'

const RadiosAnswerRange = ({ handleCheck, selectedMembers, register,name }) => {
    const arr = selectedMembers && [...selectedMembers];

    return (
        selectedMembers ? (
            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">לא רלוונטי</th>
                        <th scope="col">בכלל לא</th>
                        <th scope="col">במידה מועטה</th>
                        <th scope="col">במידה רבה</th>
                        <th scope="col">במידה רבה מאוד</th>
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
                        <>
                            <tr key={index}>
                                <td scope="row">{worker.value}</td>
                                <td className={styles.radioBtn}>
                                    <RadioButton
                                        id='חודשית'
                                        name='questionNumberTwo'
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
                                        name='questionNumberTwo'
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
                                        name='questionNumberTwo'
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
                                        name='questionNumberTwo'
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
                                        name='questionNumberTwo'
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
                        </>
                    ))}
                </tbody>
            </table>) : (
            <table>
                <thead>
                    <tr>
                        <th scope="col">בכלל לא</th>
                        <th scope="col">במידה מועטה</th>
                        <th scope="col">במידה רבה</th>
                        <th scope="col">במידה רבה מאוד</th>
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

export default RadiosAnswerRange