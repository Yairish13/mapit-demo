/* eslint-disable react/no-unescaped-entities */
"use client";
import { useSelector } from "react-redux";
import styles from './SecondPart.module.css';
import { setNextStep, setSelectedMembers, setAnsweredQuestions, filterAnsweredQuestions, setQuestionNine, setAnswers } from "../../../store/generalSlice";
import Checkbox from "@components/Checkbox/Checkbox";
import RadiosAnswer from "@components/RadiosAnswer/RadiosAnswer";
import { useTranslation } from "@app/i18n/client";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from "react-i18next/TransWithoutContext";
import QuestionaireHeader from "@components/QuestionaireHeader/QuestionaireHeader";
import QuestionaireFooter from "@components/QuestionaireFooter/QuestionaireFooter";
import { getErrored, handleQuestionNine, isAnswered, isErrored } from "@utils";
import { useEffect, useState } from "react";
import members from '@utils/workers.json';

const SecondPart = ({ lng, register, handleSubmit, setValue, errors, getValues, dispatch }) => {
    const [answersObj, setAnswersObj] = useState({});
    const [questionThreeArr, setQuestionThreeArr] = useState([]);
    const { t } = useTranslation(lng);
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    const answers = useSelector((state) => state.general.answers);
    console.log(answers, 'answeers');
    const arr = [...selectedMembers]

    const handleNext = () => {
        const nineArr = handleQuestionNine(members, selectedMembers, questionThreeArr);
        console.log(nineArr, 'nineArr');
        dispatch(setQuestionNine(nineArr));
        dispatch(setAnsweredQuestions('questionThree'));
        dispatch(setNextStep());
        dispatch(setAnswers({ ...answers, ...answersObj, questionThree: questionThreeArr }))

    }
    const handleCheck = (option, name, index) => {
        if (name === 'questionThree') {
            const member = arr[index];
            if (questionThreeArr.some((el) => el.id === member.id)) {
                const arr = questionThreeArr.filter((el) => el.id !== member.id);
                setQuestionThreeArr(arr)
            }
            else { setQuestionThreeArr((prev => [...prev, member])) }
            arr[index] = { ...arr[index], [name]: option.target.checked };
            if (arr.some(el => el.questionThree)) dispatch(setAnsweredQuestions(name))
            else dispatch(filterAnsweredQuestions(name))
        }
        else {
            arr[index] = { ...arr[index], [name]: option.target.id };
            const answered = isAnswered(getValues(), name);
            if (answered) dispatch(setAnsweredQuestions(name));

            let temp = answersObj[name] || [];
            if (temp.some((el) => el.id === arr[index].id)) { temp = temp.filter((el) => el.id !== arr[index].id) }
            setAnswersObj((prev) => ({ ...prev, [name]: [...temp, { id: arr[index].id, value: option.target.id }] }))
        }
        dispatch(setSelectedMembers(arr))
    }


    useEffect(() => {
        const focusedInput = getErrored(errors);
        console.log(focusedInput, 'focusedInput');
        if (focusedInput) {
            focusedInput.focus();
        }
    }, [errors])
    return (
        <>
            <div className='divContainer'>
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
                        <span className={styles.nonFormal}>{t("pages.questionaire.nonFormal")}</span>
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