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
import { useForm } from 'react-hook-form';
import { setIsFinished, setPartC } from '@store/generalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isErrored } from '@utils';

const SeventhPart = ({
    lng
}) => {
    const router = useRouter();
    const partC = useSelector((state) => state.general.partC);
    const isFinished = useSelector((state) => state.general.isFinished);

    const dispatch = useDispatch();
    let obj = { ...partC };
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        mode: 'onChange',
    });
    const { t } = useTranslation(lng);
    const handleCheck = (option, name) => {
        setValue(name, true)
        if (option?.target?.id) obj = { ...obj, [name]: option.target.id };
        else obj = { ...obj, [name]: option };
        console.log(obj);
        dispatch(setPartC(obj))
    }
    const handleNext = () => {
        dispatch(setIsFinished())
        router.push(`${lng}/finish`)
    }
    useEffect(() => {
        console.log(errors);
    }, [errors])
    useEffect(() => {
        console.log(isFinished);
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
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.thirdPart.believe')}
                        subText={t("pages.questionaire.thirdPart.rangeText")}
                        number={1}
                    />
                    <RadiosAnswerRange
                        name="questionOne"
                        textOne={t("pages.questionaire.partC.questionOneTextOne")}
                        textTwo={t("pages.questionaire.partC.questionOneTextTwo")}
                        handleCheck={handleCheck}
                        register={register}
                        required={true}
                        isError={isErrored(errors, 'questionOne')}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.thirdPart.believe')}
                        subText={t("pages.questionaire.thirdPart.rangeText")}
                        number={2}
                    />
                    <RadiosAnswerRange
                        name='questionTwo'
                        textOne={t("pages.questionaire.partC.questionTwoTextOne")}
                        textTwo={t("pages.questionaire.partC.questionTwoTextTwo")}
                        handleCheck={handleCheck}
                        required={true}
                        register={register}
                        isError={isErrored(errors, 'questionTwo')}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.thirdPart.believe')}
                        subText={t("pages.questionaire.thirdPart.rangeText")}
                        number={3}
                    />
                    <RadiosAnswerRange
                        name='questionThree'
                        textOne={t("pages.questionaire.partC.questionThreeTextOne")}
                        textTwo={t("pages.questionaire.partC.questionThreeTextTwo")}
                        handleCheck={handleCheck}
                        required={true}
                        register={register}
                        isError={isErrored(errors, 'questionThree')}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partC.questionFour" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={4}
                    />
                    <div className={`${isErrored(errors, 'questionFour') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionFour"
                            handleCheck={handleCheck}
                            register={register}
                            required={true}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partC.questionFive" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={5}
                    />
                    <RadiosAnswerRange
                        name='questionFive'
                        textOne={t("global.yes")}
                        textTwo={t("global.no")}
                        handleCheck={handleCheck}
                        register={register}
                        required={true}
                        isError={isErrored(errors, 'questionFive')}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partC.questionSix" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={6}
                    />
                    <div className={`${isErrored(errors, 'questionSix') ? 'error' : ''} answer`}>
                        <RadiosAnswerSurvey
                            name="questionSix"
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
                    handleClick={handleSubmit(handleNext)}
                />
            </div>
        </div>
    )
}

export default SeventhPart