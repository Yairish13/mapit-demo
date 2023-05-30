"use client"
import CircleProgress from '@components/CircleProgress/CircleProgress'
import styles from './SixthPart.module.css'
import { useTranslation } from '@app/i18n/client';
import RadiosAnswerSurvey from '@components/RadiosAnswerSurvey/RadiosAnswerSurvey';
import Button from '@components/Button/Button';
import Stepper from '@components/Stepper/Stepper';
import { useDispatch } from 'react-redux';
import { setNextStep, setPercentage } from '@store/generalSlice';
import QuestionText from '@components/QuestionText/QuestionText';

const SixthPart = ({
    lng
}) => {
    const { t } = useTranslation(lng);
    const dispatch = useDispatch()
    const handleNext = () => {
        dispatch(setNextStep())
        dispatch(setPercentage())
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
                        text={t('pages.questionaire.questionTen')}
                        number={10}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.questionEleven')}
                        number={11}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.questionTwelve')}
                        number={12}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.questionThirteen')}
                        number={13}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.questionFourteen')}
                        number={14}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.questionFiveteen')}
                        number={15}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
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