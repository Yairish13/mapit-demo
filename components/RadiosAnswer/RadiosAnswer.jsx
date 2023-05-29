import RadioButton from '@components/RadioButton/RadioButton'
import styles from './RadiosAnswer.module.css'
import React from 'react'

const RadiosAnswer = ({handleCheck, selectedMembers,register}) => {
    const arr = [...selectedMembers]

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">חודשית</th>
                    <th scope="col">שבועית</th>
                    <th scope="col">יומית</th>
                </tr>
            </thead>
            <tbody>
                {/* {members && members[0] && members[0].departments && members[0].departments[0].workers.map((worker, index) => ( */}
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
                        </tr>
                    </>
                ))}
            </tbody>
        </table>
    )
}

export default RadiosAnswer