"use client"
import styles from './SixthPart.module.css'
import { useTranslation } from '@app/i18n/client';
import RadiosAnswerSurvey from '@components/RadiosAnswerSurvey/RadiosAnswerSurvey';
import Stepper from '@components/Stepper/Stepper';
import { useDispatch, useSelector } from 'react-redux';
import { setAnsweredQuestions, setNextStep, setPartB } from '@store/generalSlice';
import QuestionText from '@components/QuestionText/QuestionText';
import { Trans } from 'react-i18next/TransWithoutContext';
import QuestionaireHeader from '@components/QuestionaireHeader/QuestionaireHeader';
import QuestionaireFooter from '@components/QuestionaireFooter/QuestionaireFooter';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { getErrored, isErrored } from '@utils';

const SixthPart = ({
    lng
}) => {
    const { t } = useTranslation(lng);
    const partB = useSelector((state) => state.general.partB);
    let obj = { ...partB };
    const { register, handleSubmit, setValue, formState: { errors },setFocus, onError } = useForm({
        mode: 'onChange',
    });
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch(setNextStep())
    }
    const handleCheck = (option, name) => {
        setValue(name,true)
        dispatch(setAnsweredQuestions(name))
        obj = { ...obj, [name]: option.target.id };
        dispatch(setPartB(obj))
    }

    const focusedInput = getErrored(errors);
    if (focusedInput) {
        focusedInput.focus();
    }
    return (
        <div className={styles.containerPartB}>
            <div>
                <Stepper type="vertical" />
            </div>
            <div className='container'>
                <QuestionaireHeader
                    title={t("pages.questionaire.secondPart")}
                />
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionTen" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={10}
                    />
                    <div className={`${isErrored(errors, 'questionTen') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionTen"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionEleven" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={11}
                    />
                    <div className={`${isErrored(errors, 'questionEleven') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionEleven"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionTwelve" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={12}
                    />
                    <div className={`${isErrored(errors, 'questionTwelve') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionTwelve"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionThirteen" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={13}
                    />
                    <div className={`${isErrored(errors, 'questionThirteen') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionThirteen"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionFourteen" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={14}
                    />
                    <div className={`${isErrored(errors, 'questionFourteen') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionFourteen"
                            handleCheck={handleCheck}
                            register={register}
                            setValue={setValue}
                            required={true}
                        />
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionFiveteen" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={15}
                    />
                    <div className={`${isErrored(errors, 'questionFiveteen') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionFiveteen"
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
                    handleClick={handleSubmit(handleNext, onError)}
                />
            </div>
        </div>
    )
}

export default SixthPart