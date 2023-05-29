/* eslint-disable react/no-unescaped-entities */
"use client";
import Stepper from "@components/Stepper/Stepper";
import { useDispatch, useSelector } from "react-redux";
import styles from './SecondPart.module.css';
import Button from "@components/Button/Button";
import { setNextStep, setPercentage } from "../../store/generalSlice";
import CircleProgress from "@components/CircleProgress/CircleProgress";
import { useForm } from "react-hook-form";
import Checkbox from "@components/Checkbox/Checkbox";
import RadiosAnswer from "@components/RadiosAnswer/RadiosAnswer";


const SecondPart = ({ members }) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        mode: 'any',
    });
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    const arr = [...selectedMembers]
    const dispatch = useDispatch()
    const handleNext = () => {
        dispatch(setNextStep())
        dispatch(setPercentage())
    }
    const handleCheck = (option, index, name) => {
        if (name === 'questionNumberThree') arr[index] = { ...arr[index], [name]: option.target.checked };
        else arr[index] = { ...arr[index], [name]: option.target.id };
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerDiv}>
                    <h3 className="title">
                        {t('pages.questionaireOne.firstPart')}
                    </h3>
                    <CircleProgress />
                </div>
                <div className={styles.answerContainer}>
                    <div className={styles.question}>
                        <div><span>2. {' '}</span>
                            {t('pages.questionaireOne.questionTwo')}

                        </div>
                        <div className={styles.subTextQuestion}>
                            {t('pages.questionaireOne.noRelevant')}
                        </div>
                    </div>
                    <div className={styles.answer}>
                        <RadiosAnswer
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className={styles.question}>
                        <div><span>3. {' '} </span>
                            {t('pages.questionaireOne.questionThree')}
                        </div>
                        <div className={styles.subTextQuestion}>
                            {t("pages.questionaireOne.noRelevant")}
                        </div>
                    </div>
                    <div className={`${styles.answer} ${styles.aformalDiv}`}>
                        {t("pages.questionaireOne.nonFormal")}
                        {selectedMembers.map((worker, index) => (
                            <div key={index}>
                                <Checkbox
                                    id="questionNumberThree"
                                    name='questionNumberThree'
                                    label={worker.value}
                                    refs={{ ...register(`questionNumberThree`) }}
                                    onChange={handleCheck}
                                    checked={arr[index].questionNumberThree}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.footer} >
                <div className={styles.stepper}><Stepper /></div>
                <Button mode="primary" onClick={handleNext}>{t('global.next')}</Button>
            </div>
        </>
    )
}

export default SecondPart