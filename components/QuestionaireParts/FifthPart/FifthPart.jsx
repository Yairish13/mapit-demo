/* eslint-disable react/no-unescaped-entities */
"use client";
import Stepper from "@components/Stepper/Stepper";
import { useDispatch, useSelector } from "react-redux";
import styles from './FifthPart.module.css';
import Button from "@components/Button/Button";
import { setNextStep, setPercentage } from "../../../store/generalSlice";
import CircleProgress from "@components/CircleProgress/CircleProgress";
import { useForm } from "react-hook-form";
import { useTranslation } from "@app/i18n/client";
import RadiosAnswerSurvey from "@components/RadiosAnswerSurvey/RadiosAnswerSurvey";
import CustomSelect from "@components/CustomSelect/CustomSelect";


const FifthPart = ({ members, lng }) => {
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
                    <div className='question'>
                        <div>8.<span> {' '}</span>
                            {t('pages.questionaire.questionEight')}
                        </div>
                        <div className={styles.subTextQuestion}>
                            {t("pages.questionaire.notChosen")}
                        </div>
                    </div>
                    <div className='answer'>
                        <CustomSelect
                            withNoHeader={true}
                            options={selectedMembers}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>9.<span>{' '} </span>
                            {t('pages.questionaire.questionNine')}
                        </div>
                        <div className={styles.subTextQuestion}>
                            {t("pages.questionaire.notChosen")}
                        </div>
                    </div>
                    <div className='answer'>
                        <CustomSelect
                            withArrow={false}
                            options={selectedMembers}
                            placeholder={t('global.department')}
                        />
                        <CustomSelect
                            withArrow={false}
                            options={selectedMembers}
                            placeholder={t('global.department')}

                        />
                        <CustomSelect
                            withArrow={false}
                            options={selectedMembers}
                            placeholder={t('global.department')}
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

export default FifthPart