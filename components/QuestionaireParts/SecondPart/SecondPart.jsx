/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from './SecondPart.module.css';
import { setNextStep, increasePercentage, setSelectedMembers } from "../../../store/generalSlice";
import { useForm } from "react-hook-form";
import Checkbox from "@components/Checkbox/Checkbox";
import RadiosAnswer from "@components/RadiosAnswer/RadiosAnswer";
import { useTranslation } from "@app/i18n/client";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from "react-i18next/TransWithoutContext";
import QuestionaireHeader from "@components/QuestionaireHeader/QuestionaireHeader";
import QuestionaireFooter from "@components/QuestionaireFooter/QuestionaireFooter";
import { useEffect } from "react";
import { isErrored } from "@utils";


const SecondPart = ({ members, lng }) => {
    const { t } = useTranslation(lng);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        mode: 'onChange',
    });
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    const arr = [...selectedMembers]
    const dispatch = useDispatch()
    const handleNext = () => {
        dispatch(setNextStep())
        dispatch(increasePercentage())
    }
    const handleCheck = (option, name, index) => {
        console.log(option, name, index, 'option, name, index');
        if (name === 'questionThree') arr[index] = { ...arr[index], [name]: option.target.checked };
        else arr[index] = { ...arr[index], [name]: option.target.id };
        dispatch(setSelectedMembers(arr))

    }
    useEffect(() => {
        console.log(errors);
    }, [errors])
    return (
        <>
            <div className={styles.container}>
                <QuestionaireHeader
                    title={t("pages.questionaire.firstPart")}
                />
                <div className={styles.answerContainer}>
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
                <div className={styles.answerContainer}>
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
                handleClick={handleSubmit(handleNext)}
            />
        </>
    )
}

export default SecondPart