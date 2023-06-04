/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from './ThirdPart.module.css';
import { setNextStep, increasePercentage } from "../../../store/generalSlice";
import { useForm } from "react-hook-form";
import { useTranslation } from "@app/i18n/client";
import RadiosAnswerSurvey from "@components/RadiosAnswerSurvey/RadiosAnswerSurvey";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from "react-i18next/TransWithoutContext";
import QuestionaireHeader from "@components/QuestionaireHeader/QuestionaireHeader";
import QuestionaireFooter from "@components/QuestionaireFooter/QuestionaireFooter";


const ThirdPart = ({ members, lng }) => {
    const { t } = useTranslation(lng);
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        mode: 'any',
    });
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    console.log(selectedMembers,'selectedMembers');
    const arr = [...selectedMembers]
    const dispatch = useDispatch()
    const handleNext = () => {
        console.log(arr);
        dispatch(setNextStep())
        dispatch(increasePercentage())
    }
    const handleCheck = (option, index, name) => {
        console.log(option,index,name);
        arr[index] = { ...arr[index], [name]: option.target.id };
    }
    // const handleCheck = (option, index, name) => {
    //     console.log(option, index, name);
    //     if (name === 'questionNumberThree') arr[index] = { ...arr[index], [name]: option.target.checked };
    //     else arr[index] = { ...arr[index], [name]: option.target.id };
    //     console.log(arr);
    // }
    return (
        <>
            <div className={styles.container}>
                <QuestionaireHeader
                    title={t("pages.questionaire.firstPart")}
                />
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionFour" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.noRelevant')}
                        number={4}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                            name='questionFour'
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionFive" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.noRelevant')}
                        number={5}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                            name='questionFive'
                        />
                    </div>
                </div>
            </div>
            <QuestionaireFooter
                handleClick={handleNext}
            />
        </>
    )
}

export default ThirdPart