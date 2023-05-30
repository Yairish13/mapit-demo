"use client"
import CircleProgress from '@components/CircleProgress/CircleProgress'
import styles from './page.module.css'
import { useTranslation } from '@app/i18n/client';
import RadiosAnswerSurvey from '@components/RadiosAnswerSurvey/RadiosAnswerSurvey';
import Button from '@components/Button/Button';
import Stepper from '@components/Stepper/Stepper';

const Page = ({ params: {
    lng
} }) => {
    const { t } = useTranslation(lng);

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
                    <div className='question'>
                        <div>10.<span> {' '}</span>
                            {t('pages.questionaire.partB.questionOne')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>11.<span> {' '}</span>
                            {t('pages.questionaire.partB.questionTwo')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>12.<span> {' '}</span>
                            {t('pages.questionaire.partB.questionThree')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>13.<span> {' '}</span>
                            {t('pages.questionaire.partB.questionFour')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>14.<span> {' '}</span>
                            {t('pages.questionaire.partB.questionFive')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerSurvey
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>15.<span> {' '}</span>
                            {t('pages.questionaire.partB.questionSix')}
                        </div>

                    </div>
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
                    //  onClick={handleNext}
                    >
                        {t('global.next')}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Page