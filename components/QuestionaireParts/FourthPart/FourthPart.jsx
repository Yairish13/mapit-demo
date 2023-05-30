/* eslint-disable react/no-unescaped-entities */
"use client";
import Stepper from "@components/Stepper/Stepper";
import { useDispatch, useSelector } from "react-redux";
import styles from './FourthPart.module.css';
import Button from "@components/Button/Button";
import { setNextStep, setPercentage } from "../../../store/generalSlice";
import CircleProgress from "@components/CircleProgress/CircleProgress";
import { useForm } from "react-hook-form";
import Checkbox from "@components/Checkbox/Checkbox";
import RadiosAnswer from "@components/RadiosAnswer/RadiosAnswer";
import { useTranslation } from "@app/i18n/client";
import RadiosAnswerSurvey from "@components/RadiosAnswerSurvey/RadiosAnswerSurvey";
import QuestionText from "@components/QuestionText/QuestionText";


const FourthPart = ({ members, lng }) => {
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
                        {t('pages.questionaire.firstPart')}
                    </h3>
                    <CircleProgress />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.questionSix')}
                        subText={t('pages.questionaire.noRelevant')}
                        number={6}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.questionSeven')}
                        subText={t('pages.questionaire.noRelevant')}
                        number={7}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
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

export default FourthPart