/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from './ThirdPart.module.css';
import { setAnsweredQuestions, setNextStep, setSelectedMembers } from "../../../store/generalSlice";
import { useForm } from "react-hook-form";
import { useTranslation } from "@app/i18n/client";
import RadiosAnswerSurvey from "@components/RadiosAnswerSurvey/RadiosAnswerSurvey";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from "react-i18next/TransWithoutContext";
import QuestionaireHeader from "@components/QuestionaireHeader/QuestionaireHeader";
import QuestionaireFooter from "@components/QuestionaireFooter/QuestionaireFooter";
import { isAnswered, isErrored } from "@utils";


const ThirdPart = ({ members, lng }) => {
    const { t } = useTranslation(lng);
    const { register, setValue, handleSubmit, formState: { errors },getValues } = useForm({
        mode: 'any',
    });
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    const arr = [...selectedMembers]
    const dispatch = useDispatch()
    const handleNext = () => {
        dispatch(setNextStep())
    }

    const handleCheck = (option, name, index) => {
        arr[index] = { ...arr[index], [name]: option.target.id };
        const answered = isAnswered(getValues(), name)
        if (answered) dispatch(setAnsweredQuestions(name))
        dispatch(setSelectedMembers(arr))
    }

    return (
        <>
            <div className={styles.container}>
                <QuestionaireHeader
                    title={t("pages.questionaire.firstPart")}
                />
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionFour" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.noRelevant')}
                        number={4}
                    />
                    <div className={`${isErrored(errors, 'questionFour') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                            setValue={setValue}
                            name='questionFour'
                            required={true}
                        />
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionFive" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.noRelevant')}
                        number={5}
                    />
                    <div className={`${isErrored(errors, 'questionFive') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                            setValue={setValue}
                            name='questionFive'
                            required={true}
                        />
                    </div>
                </div>
            </div>
            <QuestionaireFooter
                isError={Object.keys(errors).length > 0 ? true : false}
                handleClick={handleSubmit(handleNext)}
            />
        </>
    )
}

export default ThirdPart