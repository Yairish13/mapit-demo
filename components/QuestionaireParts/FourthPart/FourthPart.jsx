/* eslint-disable react/no-unescaped-entities */
"use client";
import { useSelector } from "react-redux";
import styles from './FourthPart.module.css';
import { setNextStep, increasePercentage, setAnsweredQuestions } from "../../../store/generalSlice";
import { useTranslation } from "@app/i18n/client";
import RadiosAnswerSurvey from "@components/RadiosAnswerSurvey/RadiosAnswerSurvey";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from "react-i18next/TransWithoutContext";
import QuestionaireFooter from "@components/QuestionaireFooter/QuestionaireFooter";
import QuestionaireHeader from "@components/QuestionaireHeader/QuestionaireHeader";
import { getErrored, isAnswered, isErrored } from "@utils";


const FourthPart = ({ lng, register, handleSubmit, setValue, errors, getValues, dispatch }) => {
    const { t } = useTranslation(lng);
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    const arr = [...selectedMembers]
    const handleNext = () => {
        dispatch(setNextStep())
    }
    const handleCheck = (option, name, index) => {
        arr[index] = { ...arr[index], [name]: option.target.id };
        const answered = isAnswered(getValues(), name)
        if (answered) dispatch(setAnsweredQuestions(name))
    }

    const focusedInput = getErrored(errors);
    if (focusedInput) {
        focusedInput.focus();
    }
    return (
        <>
            <div className='divContainer'>
                <QuestionaireHeader
                    title={t("pages.questionaire.firstPart")}
                />
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionSix" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.noRelevant')}
                        number={6}
                    />
                    <div className={`${isErrored(errors, 'questionSix') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            t={t}
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                            name="questionSix"
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionSeven" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.noRelevant')}
                        number={7}
                    />
                    <div className={`${isErrored(errors, 'questionSeven') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            t={t}
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                            name="questionSeven"
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
            </div>
            <QuestionaireFooter
                isError={Object.keys(errors).length > 0 ? true : false}
                handleClick={handleSubmit(() => handleNext())}
            />
        </>
    )
}

export default FourthPart