"use client"
import CircleProgress from '@components/CircleProgress/CircleProgress'
import styles from './page.module.css'
import { useTranslation } from '@app/i18n/client';
import RadiosAnswerRange from '@components/RadiosAnswerRange/RadiosAnswerRange';
import Button from '@components/Button/Button';
import Stepper from '@components/Stepper/Stepper';

const SeventhPart = ({ params: {
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
                        {t('pages.questionaire.thirdPart')}
                    </h3>
                    <CircleProgress />
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>10.<span> {' '}</span>
                            {t('pages.questionaire.questionTen')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerRange
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>11.<span> {' '}</span>
                            {t('pages.questionaire.questionEleven')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerRange
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>12.<span> {' '}</span>
                            {t('pages.questionaire.questionTwelve')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerRange
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>13.<span> {' '}</span>
                            {t('pages.questionaire.questionThirteen')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerRange
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>14.<span> {' '}</span>
                            {t('pages.questionaire.questionFourteen')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerRange
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
                        />
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>15.<span> {' '}</span>
                            {t('pages.questionaire.questionFiveteen')}
                        </div>

                    </div>
                    <div className='answer'>
                        <RadiosAnswerRange
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

export default SeventhPart