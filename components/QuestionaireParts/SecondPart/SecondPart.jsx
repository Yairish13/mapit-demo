/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from './SecondPart.module.css';
import { setNextStep, setSelectedMembers, setAnsweredQuestions, filterAnsweredQuestions } from "../../../store/generalSlice";
import { useForm } from "react-hook-form";
import Checkbox from "@components/Checkbox/Checkbox";
import RadiosAnswer from "@components/RadiosAnswer/RadiosAnswer";
import { useTranslation } from "@app/i18n/client";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from "react-i18next/TransWithoutContext";
import QuestionaireHeader from "@components/QuestionaireHeader/QuestionaireHeader";
import QuestionaireFooter from "@components/QuestionaireFooter/QuestionaireFooter";
import { useEffect } from "react";
import { getErrored, isAnswered, isErrored } from "@utils";


const SecondPart = ({ members, lng }) => {
    const { t } = useTranslation(lng);
    const { register, handleSubmit, setValue, formState: { errors }, setFocus, getValues } = useForm({
        mode: 'all',
    });
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    const arr = [...selectedMembers]
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch(setAnsweredQuestions('questionThree'));
        dispatch(setNextStep())
    }
    const handleCheck = (option, name, index) => {
        if (name === 'questionThree') {
            arr[index] = { ...arr[index], [name]: option.target.checked };
            if (arr.some(el => el.questionThree)) dispatch(setAnsweredQuestions(name))
            else dispatch(filterAnsweredQuestions(name))
        }
        else {
            arr[index] = { ...arr[index], [name]: option.target.id };
            const answered = isAnswered(getValues(), name)
            if (answered) dispatch(setAnsweredQuestions(name))
        }
        dispatch(setSelectedMembers(arr))
    }


    const focusedInput = getErrored(errors);
    if (focusedInput) {
        focusedInput.focus();
    }
    return (
        <>
            <div className={styles.container}>
                <QuestionaireHeader
                    title={t("pages.questionaire.firstPart")}
                />
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionTwo" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={2}
                    />
                    <div className={`${isErrored(errors, 'questionTwo') ? 'error' : ''} answer`}>
                        {selectedMembers &&
                            <RadiosAnswer
                                handleCheck={handleCheck}
                                selectedMembers={selectedMembers}
                                setValue={setValue}
                                register={register}
                                name="questionTwo"
                            />}
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionThree" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.questionThreeSubText')}
                        number={3}
                    />
                    <div className={`${isErrored(errors, 'questionThree') ? 'error' : ''} answer ${styles.aformalDiv}`}>
                        {t("pages.questionaire.nonFormal")}
                        {selectedMembers.map((worker, index) => (
                            <div key={index}>
                                <Checkbox
                                    id="questionThree"
                                    name='questionThree'
                                    label={worker.value}
                                    onChange={handleCheck}
                                    checked={arr[index].questionNumberThree}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <QuestionaireFooter
                isError={Object.keys(errors).length > 0 ? true : false}
                handleClick={handleSubmit(handleNext)}
            />
        </>
    )
}

export default SecondPart