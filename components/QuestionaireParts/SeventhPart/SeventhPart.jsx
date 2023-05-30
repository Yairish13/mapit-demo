"use client"
import CircleProgress from '@components/CircleProgress/CircleProgress'
import styles from './SeventhPart.module.css'
import { useTranslation } from '@app/i18n/client';
import RadiosAnswerSurvey from '@components/RadiosAnswerSurvey/RadiosAnswerSurvey';
import Button from '@components/Button/Button';
import Stepper from '@components/Stepper/Stepper';
import RadiosAnswerRange from '@components/RadiosAnswerRange/RadiosAnswerRange';
import { useRouter } from 'next/navigation';
import QuestionText from '@components/QuestionText/QuestionText';

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
                    <QuestionText
                        text={t('pages.questionaire.thirdPart.believe')}
                        subText={t("pages.questionaire.thirdPart.rangeText")}
                        number={16}
                    />
                    <RadiosAnswerRange
                        name="questionSixteen"
                        textOne={t("pages.questionaire.questionSixteenOne")}
                        textTwo={t("pages.questionaire.questionSixteenTwo")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.thirdPart.believe')}
                        subText={t("pages.questionaire.thirdPart.rangeText")}
                        number={17}
                    />
                    <RadiosAnswerRange
                        name='questionSeventeen'
                        textOne={t("pages.questionaire.questionSeventeenOne")}
                        textTwo={t("pages.questionaire.questionSeventeenTwo")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.thirdPart.believe')}
                        subText={t("pages.questionaire.thirdPart.rangeText")}
                        number={18}
                    />
                    <RadiosAnswerRange
                        name='questionEighteen'
                        textOne={t("pages.questionaire.questionEighteenOne")}
                        textTwo={t("pages.questionaire.questionEighteenTwo")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.questionNineteen')}
                        number={19}
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
                        text={t('pages.questionaire.questionTwenty')}
                        number={20}
                    />
                    <RadiosAnswerRange
                        name='questionTwenty'
                        textOne={t("global.yes")}
                        textTwo={t("global.no")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={t('pages.questionaire.questionTwentyOne')}
                        number={21}
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

export default SeventhPart