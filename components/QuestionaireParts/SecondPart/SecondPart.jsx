/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from './SecondPart.module.css';
import { setNextStep, increasePercentage } from "../../../store/generalSlice";
import { useForm } from "react-hook-form";
import Checkbox from "@components/Checkbox/Checkbox";
import RadiosAnswer from "@components/RadiosAnswer/RadiosAnswer";
import { useTranslation } from "@app/i18n/client";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from "react-i18next/TransWithoutContext";
import QuestionaireHeader from "@components/QuestionaireHeader/QuestionaireHeader";
import QuestionaireFooter from "@components/QuestionaireFooter/QuestionaireFooter";


const SecondPart = ({ members, lng }) => {
    const { t } = useTranslation(lng);
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        mode: 'any',
    });
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    const arr = [...selectedMembers]
    const dispatch = useDispatch()
    const handleNext = () => {
        dispatch(setNextStep())
        dispatch(increasePercentage())
    }
    const handleCheck = (option, index, name) => {
        if (name === 'questionNumberThree') arr[index] = { ...arr[index], [name]: option.target.checked };
        else arr[index] = { ...arr[index], [name]: option.target.id };
    }
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
                        subText={t('pages.questionaire.noRelevant')}
                        number={2}
                    />
                    <div className='answer'>
                        {selectedMembers && <RadiosAnswer
                            handleCheck={handleCheck}
                            selectedMembers={selectedMembers}
                            register={register}
                        />}
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionThree" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.noRelevant')}
                        number={3}
                    />
                    <div className={`answer ${styles.aformalDiv}`}>
                        {t("pages.questionaire.nonFormal")}
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
            </div >
            <QuestionaireFooter
                handleClick={handleNext}
            />
        </>
    )
}

export default SecondPart