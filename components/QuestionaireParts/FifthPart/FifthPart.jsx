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
import CustomSelect from "@components/CustomSelect/CustomSelect";
import Checkbox from "@components/Checkbox/Checkbox";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from "react-i18next/TransWithoutContext";


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
    const options = [{ "id": 13, "value": "כריסטיאנו רונאלדו" }, { "id": 14, "value": "מייקל ג'קסון" }, { "id": 15, "value": "סקוטי פיפר" }, { "id": 16, "value": "לברון ג'יימס" }, { "id": 17, "value": "שירלי כהן" }, { "id": 18, "value": "קובי ברייאנט" }]
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
                        text={<Trans i18nKey="pages.questionaire.questionEight" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t('pages.questionaire.noRelevant')}
                        number={8}
                    />
                    <div className='answer'>
                        <div className={styles.optionsContainer}>
                            {options.map((el, index) => (
                                <div key={index} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <Checkbox
                                        label={el.value}
                                        onChange={console.log('e')}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionNine" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        subText={t("pages.questionaire.notChosen")}
                        number={9}
                    />
                    <div className={`${styles.selectsContainer} answer`} >
                        <CustomSelect
                            withArrow={true}
                            options={options}
                            placeholder={t('global.department')}
                        />
                        <CustomSelect
                            withArrow={true}
                            options={options}
                            placeholder={t('global.department')}

                        />
                        <CustomSelect
                            withArrow={true}
                            options={options}
                            placeholder={t('global.department')}
                        />
                    </div>
                </div>
            </div >
            <div className={styles.footer} >
                <div className={styles.stepper}><Stepper /></div>
                <Button mode="primary" onClick={handleNext}>{t('global.next')}</Button>
            </div>
        </>
    )
}

export default FifthPart