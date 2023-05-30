"use client"
import CircleProgress from '@components/CircleProgress/CircleProgress'
import styles from './SeventhPart.module.css'
import { useTranslation } from '@app/i18n/client';
import RadiosAnswerSurvey from '@components/RadiosAnswerSurvey/RadiosAnswerSurvey';
import Button from '@components/Button/Button';
import Stepper from '@components/Stepper/Stepper';
import RadioRange from '@components/RadioRange/RadioRange';
import RadiosAnswerRange from '@components/RadiosAnswerRange/RadiosAnswerRange';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SeventhPart = ({
    lng
}) => {
    const router = useRouter();
    const { t } = useTranslation(lng);
    const handleNext = () => {
        router.push(`${lng}/finish`)
    }
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
                        <div>16.<span> {' '}</span>
                            {t('pages.questionaire.thirdPart.believe')}
                        </div>
                        <div className={styles.subTextQuestion}>
                            {t("pages.questionaire.thirdPart.rangeText")}
                        </div>
                    </div>
                    <RadiosAnswerRange
                        name="questionSixteen"
                        textOne={t("pages.questionaire.questionSixteenOne")}
                        textTwo={t("pages.questionaire.questionSixteenTwo")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>17.<span> {' '}</span>
                            {t('pages.questionaire.thirdPart.believe')}
                        </div>
                        <div className={styles.subTextQuestion}>
                            {t("pages.questionaire.thirdPart.rangeText")}
                        </div>
                    </div>
                    <RadiosAnswerRange
                        name='questionSeventeen'
                        textOne={t("pages.questionaire.questionSeventeenOne")}
                        textTwo={t("pages.questionaire.questionSeventeenTwo")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>18.<span> {' '}</span>
                            {t('pages.questionaire.thirdPart.believe')}
                        </div>
                        <div className={styles.subTextQuestion}>
                            {t("pages.questionaire.thirdPart.rangeText")}
                        </div>
                    </div>
                    <RadiosAnswerRange
                        name='questionEighteen'
                        textOne={t("pages.questionaire.questionEighteenOne")}
                        textTwo={t("pages.questionaire.questionEighteenTwo")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>19.<span> {' '}</span>
                            {t('pages.questionaire.questionNineteen')}
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
                        <div>20.<span> {' '}</span>
                            {t('pages.questionaire.questionTwenty')}
                        </div>
                    </div>
                    <RadiosAnswerRange
                        name='questionTwenty'
                        textOne={t("global.yes")}
                        textTwo={t("global.no")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <div className='question'>
                        <div>21.<span> {' '}</span>
                            {t('pages.questionaire.questionTwentyOne')}
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
                        onClick={handleNext}
                    >
                        {t('global.next')}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SeventhPart