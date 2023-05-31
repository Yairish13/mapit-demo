"use client"
import CircleProgress from '@components/CircleProgress/CircleProgress'
import styles from './SixthPart.module.css'
import { useTranslation } from '@app/i18n/client';
import RadiosAnswerSurvey from '@components/RadiosAnswerSurvey/RadiosAnswerSurvey';
import Button from '@components/Button/Button';
import Stepper from '@components/Stepper/Stepper';
import { useDispatch } from 'react-redux';
import { setNextStep, increasePercentage } from '@store/generalSlice';
import QuestionText from '@components/QuestionText/QuestionText';
import { Trans } from 'react-i18next/TransWithoutContext';

const SixthPart = ({
    lng
}) => {
    const { t } = useTranslation(lng);
    const dispatch = useDispatch()
    const handleNext = () => {
        dispatch(setNextStep())
        dispatch(increasePercentage())
    }
    return (
        <div className={styles.containerPartB}>
            <div>
                <Stepper type="vertical" />
            </div>
            <div className='container'>
                <div className={styles.headerDiv}>
                    <h3 className="title">
                        {t('pages.questionaire.secondPart')}
                    </h3>
                    <CircleProgress />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partB.questionOne" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={1}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            name="questionOnePartB"
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
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
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            name="questionTwoPartB"
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
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
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            name="questionThreePartB"

                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
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
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            name="questionFourPartB"

                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
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
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            name="questionFivePartB"

                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
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
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            name="questionSixPartB"

                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.footer} >
                    <Button
                        mode="primary"
                        onClick={handleNext}
                    >
                        {t('global.next')}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SixthPart