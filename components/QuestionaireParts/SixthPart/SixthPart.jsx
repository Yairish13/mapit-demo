"use client"
import styles from './SixthPart.module.css'
import { useTranslation } from '@app/i18n/client';
import RadiosAnswerSurvey from '@components/RadiosAnswerSurvey/RadiosAnswerSurvey';
import Stepper from '@components/Stepper/Stepper';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStep, increasePercentage, setPartB } from '@store/generalSlice';
import QuestionText from '@components/QuestionText/QuestionText';
import { Trans } from 'react-i18next/TransWithoutContext';
import QuestionaireHeader from '@components/QuestionaireHeader/QuestionaireHeader';
import QuestionaireFooter from '@components/QuestionaireFooter/QuestionaireFooter';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { isErrored } from '@utils';

const SixthPart = ({
    lng
}) => {
    const { t } = useTranslation(lng);
    const partB = useSelector((state) => state.general.partB);
    let obj = { ...partB };
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        mode: 'onChange',
    });
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch(setNextStep())
        dispatch(increasePercentage())
    }
    const handleCheck = (option, name) => {
        setValue(name,true)
        obj = { ...obj, [name]: option.target.id };
        dispatch(setPartB(obj))
    }
    useEffect(() => { console.log(errors); }
        , [errors])
    return (
        <div className={styles.containerPartB}>
            <div>
                <Stepper type="vertical" />
            </div>
            <div className='container'>
                <QuestionaireHeader
                    title={t("pages.questionaire.secondPart")}
                />
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partB.questionOne" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={1}
                    />
                    <div className={`${isErrored(errors, 'questionOne') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionOne"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partB.questionTwo" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={2}
                    />
                    <div className={`${isErrored(errors, 'questionTwo') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionTwo"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partB.questionThree" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={3}
                    />
                    <div className={`${isErrored(errors, 'questionThree') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionThree"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partB.questionFour" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={4}
                    />
                    <div className={`${isErrored(errors, 'questionFour') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionFour"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partB.questionFive" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={5}
                    />
                    <div className={`${isErrored(errors, 'questionFive') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionFive"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partB.questionSix" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={6}
                    />
                    <div className={`${isErrored(errors, 'questionSix') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionSix"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <QuestionaireFooter
                    wide={true}
                    withStepper={false}
                    isError={Object.keys(errors).length > 0 ? true : false}
                    handleClick={handleSubmit(handleNext)}
                />
            </div>
        </div>
    )
}

export default SixthPart