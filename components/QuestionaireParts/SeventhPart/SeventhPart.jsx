"use client"
import styles from './SeventhPart.module.css'
import { useTranslation } from '@app/i18n/client';
import RadiosAnswerSurvey from '@components/RadiosAnswerSurvey/RadiosAnswerSurvey';
import Stepper from '@components/Stepper/Stepper';
import RadiosAnswerRange from '@components/RadiosAnswerRange/RadiosAnswerRange';
import { useRouter } from 'next/navigation';
import QuestionText from '@components/QuestionText/QuestionText';
import { Trans } from 'react-i18next';
import QuestionaireHeader from '@components/QuestionaireHeader/QuestionaireHeader';
import QuestionaireFooter from '@components/QuestionaireFooter/QuestionaireFooter';
import { setAnsweredQuestions, setAnswers, setIsFinished, setPartC } from '@store/generalSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFocus, isErrored } from '@utils';

const SeventhPart = ({
    lng, register, handleSubmit, setValue, errors, dispatch, clearErrors
}) => {
    const [answersObj, setAnswersObj] = useState({});

    const router = useRouter();
    const partC = useSelector((state) => state.general.partC);
    const answers = useSelector((state) => state.general.answers);
    const isFinished = useSelector((state) => state.general.isFinished);
    let obj = { ...partC };
    const { t } = useTranslation(lng);
    const handleCheck = (option, name) => {
        setValue(name, true);
        clearErrors(`${name}`);
        dispatch(setAnsweredQuestions(name))
        if (option?.target?.id) obj = { ...obj, [name]: option.target.id };
        else obj = { ...obj, [name]: option };
        dispatch(setPartC(obj))
        setAnswersObj(obj)
    }
    const handleNext = () => {
        console.log({ ...answers, ...answersObj }, 'lalalal')
        dispatch(setAnswers({ ...answers, ...answersObj }))
        dispatch(setIsFinished())
        router.push(`${lng}/finish`)
    }
    const onSubmit = () => {
        if (Object.keys(errors).length > 0) {
            getFocus(errors)
        }
        handleSubmit(handleNext)();
    }
    useEffect(() => {
        getFocus(errors)
    }, [errors])
    useEffect(() => {
        if (isFinished) router.push(`${lng}/finish`)
    }, [])
    return (
        <div className={styles.containerPartB}>
            <div>
                <Stepper type="vertical" />
            </div>
            <div className='container'>
                <QuestionaireHeader
                    title={t("pages.questionaire.thirdPart")}
                />
                <div className='answerContainer'>
                    <QuestionText
                        text={t('pages.questionaire.thirdPart.believe')}
                        subText={t("pages.questionaire.thirdPart.rangeText")}
                        number={16}
                    />
                    <RadiosAnswerRange
                        name="questionSixteen"
                        textOne={t("pages.questionaire.questionSixteenTextOne")}
                        textTwo={t("pages.questionaire.questionSixteenTextTwo")}
                        handleCheck={handleCheck}
                        register={register}
                        required={true}
                        isError={isErrored(errors, 'questionSixteen')}
                    />
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={t('pages.questionaire.thirdPart.believe')}
                        subText={t("pages.questionaire.thirdPart.rangeText")}
                        number={17}
                    />
                    <RadiosAnswerRange
                        name='questionSeventeen'
                        textOne={t("pages.questionaire.questionSeventeenTextOne")}
                        textTwo={t("pages.questionaire.questionSeventeenTextTwo")}
                        handleCheck={handleCheck}
                        required={true}
                        register={register}
                        isError={isErrored(errors, 'questionSeventeen')}
                    />
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={t('pages.questionaire.thirdPart.believe')}
                        subText={t("pages.questionaire.thirdPart.rangeText")}
                        number={18}
                    />
                    <RadiosAnswerRange
                        name='questionEighteen'
                        textOne={t("pages.questionaire.questionEighteenTextOne")}
                        textTwo={t("pages.questionaire.questionEighteenTextTwo")}
                        handleCheck={handleCheck}
                        required={true}
                        register={register}
                        isError={isErrored(errors, 'questionEighteen')}
                    />
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionNineteen" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={19}
                    />
                    <div className={`${isErrored(errors, 'questionNineteen') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionNineteen"
                            handleCheck={handleCheck}
                            register={register}
                            required={true}
                        />
                    </div>
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionTwenty" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={20}
                    />
                    <RadiosAnswerRange
                        name='questionTwenty'
                        textOne={t("global.yes")}
                        textTwo={t("global.no")}
                        handleCheck={handleCheck}
                        register={register}
                        required={true}
                        shortText={true}
                        isError={isErrored(errors, 'questionTwenty')}
                    />
                </div>
                <div className='answerContainer'>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.questionTwentyOne" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={21}
                    />
                    <div className={`${isErrored(errors, 'questionTwentyOne') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionTwentyOne"
                            handleCheck={handleCheck}
                            register={register}
                            required={true}
                        />
                    </div>
                </div>
                <QuestionaireFooter
                    wide={true}
                    withStepper={false}
                    isError={Object.keys(errors).length > 0 ? true : false}
                    handleClick={onSubmit}
                />
            </div>
        </div>
    )
}

export default SeventhPart