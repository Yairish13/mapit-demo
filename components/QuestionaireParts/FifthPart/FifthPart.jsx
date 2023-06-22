/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from './FifthPart.module.css';
import { filterAnsweredQuestions, setAnsweredQuestions, setAnswers, setNextStep } from "../../../store/generalSlice";
import { useTranslation } from "@app/i18n/client";
import CustomSelect from "@components/CustomSelect/CustomSelect";
import Checkbox from "@components/Checkbox/Checkbox";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from "react-i18next/TransWithoutContext";
import QuestionaireHeader from "@components/QuestionaireHeader/QuestionaireHeader";
import QuestionaireFooter from "@components/QuestionaireFooter/QuestionaireFooter";
import { useState } from "react";

const FifthPart = ({ members, lng, dispatch }) => {
    const [answersObj, setAnswersObj] = useState({});
    const [selectedOptions, setSelectedOptions] = useState([]);
    const { t } = useTranslation(lng);
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    const answers = useSelector((state) => state.general.answers);

    const arr = [...selectedMembers];
    let newArr = [];
    const handleNext = () => {
        dispatch(setAnswers({ ...answers, ...answersObj }))
        dispatch(setAnsweredQuestions('questionEight'))
        dispatch(setAnsweredQuestions('questionNine'))
        dispatch(setNextStep())
    }
    const handleSelect = (option) => {
        if (selectedOptions.length === 0) {
            dispatch(setAnsweredQuestions('questionNine'))
        }
        const index = selectedOptions.findIndex((item) => item.id === option.id);
        if (index > -1) {
            if (selectedOptions.length === 1) dispatch(filterAnsweredQuestions('questionNine'))
            setSelectedOptions((prevOptions) => {
                const updatedOptions = [...prevOptions];
                updatedOptions.splice(index, 1);
                return updatedOptions;
            });
        } else {
            setSelectedOptions((prevOptions) => [...prevOptions, option]);
        }
    }
    const handleCheck = (e, name, index) => {
        if (e.target.checked) {
            newArr.length === 0 && dispatch(setAnsweredQuestions(name))
            newArr = [...newArr, e.target.value]
        } else {
            newArr.length === 1 && dispatch(filterAnsweredQuestions(name));
            newArr.filter((el) => el !== e.target.value)
        }

        let temp = answersObj[name] || [];
        if (temp.some((el) => el.id === arr[index].id)) { temp = temp.filter((el) => el.id !== arr[index].id) }
        setAnswersObj((prev) => ({ ...prev, [name]: [...temp, { id: arr[index].id, value: arr[index].value }] }))
    }
    return (
        <>
            <div className='divContainer'>
                <QuestionaireHeader
                    title={t("pages.questionaire.firstPart")}
                />
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionEight" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.noRelevant')}
                        number={8}
                    />
                    <div className='answer'>
                        <div className={styles.optionsContainer}>
                            {selectedMembers.map((el, index) => (
                                <div key={index} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Checkbox
                                        index={index}
                                        name="questionEight"
                                        label={el.value}
                                        onChange={handleCheck}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionNine" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t("pages.questionaire.notChosen")}
                        number={9}
                    />
                    <div className={`${styles.selectsContainer} answer`} >
                        <CustomSelect
                            name="questionNine"
                            withArrow={true}
                            options={members[0].departments[2].workers}
                            placeholder={t('global.department')}
                            onChange={handleSelect}
                            selectedOptions={selectedOptions}
                        />
                        <CustomSelect
                            name="questionNine"
                            withArrow={true}
                            options={members[0].departments[1].workers}
                            placeholder={t('global.department')}
                            onChange={handleSelect}
                            selectedOptions={selectedOptions}

                        />
                        <CustomSelect
                            name="questionNine"
                            withArrow={true}
                            options={members[0].departments[0].workers}
                            placeholder={t('global.department')}
                            onChange={handleSelect}
                            selectedOptions={selectedOptions}
                        />
                    </div>
                </div>
            </div >
            <QuestionaireFooter
                handleClick={handleNext}
            />
        </>
    )
}

export default FifthPart