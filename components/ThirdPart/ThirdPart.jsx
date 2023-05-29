/* eslint-disable react/no-unescaped-entities */
"use client";
import Stepper from "@components/Stepper/Stepper";
import { useDispatch, useSelector } from "react-redux";
import styles from './ThirdPart.module.css';
import Button from "@components/Button/Button";
import { setNextStep, setPercentage } from "../../store/generalSlice";
import CircleProgress from "@components/CircleProgress/CircleProgress";
import { useForm } from "react-hook-form";
import Checkbox from "@components/Checkbox/Checkbox";
import RadiosAnswer from "@components/RadiosAnswer/RadiosAnswer";
import { useTranslation } from "@app/i18n/client";
import RadiosAnswerRange from "@components/RadiosAnswerRange/RadiosAnswerRange";


const ThirdPart = ({ members, lng }) => {
    const { t } = useTranslation(lng);
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
        arr[index] = { ...arr[index], [name]: option.target.id };
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
                    <div className='question'>
                        <div>4.<span> {' '}</span>
                            {t('pages.questionaireOne.questionThree')}
                        </div>
                        <div className={styles.subTextQuestion}>
                            {t('pages.questionaireOne.noRelevant')}
                        </div>
                    </div>
                    <div className='answer'>
                        <RadiosAnswerRange
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>5.<span>{' '} </span>
                            {t('pages.questionaireOne.questionFive')}
                        </div>
                        <div className={styles.subTextQuestion}>
                            {t("pages.questionaireOne.noRelevant")}
                        </div>
                    </div>
                    <div className='answer'>
                        <RadiosAnswerRange
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                        />
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

export default ThirdPart