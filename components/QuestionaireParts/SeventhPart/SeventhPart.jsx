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
import { Trans } from 'react-i18next';

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
                        textOne={t("pages.questionaire.partC.questionOneTextOne")}
                        textTwo={t("pages.questionaire.partC.questionOneTextTwo")}
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
                        textOne={t("pages.questionaire.partC.questionTwoTextOne")}
                        textTwo={t("pages.questionaire.partC.questionTwoTextTwo")}
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
                        textOne={t("pages.questionaire.partC.questionThreeTextOne")}
                        textTwo={t("pages.questionaire.partC.questionThreeTextTwo")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partC.questionFour" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={4}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            name="questionFourPartC"
                        // handleCheck={handleCheck}
                        // selectedMembers={selectedMembers}
                        // register={register}
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
                        name='questionTwenty'
                        textOne={t("global.yes")}
                        textTwo={t("global.no")}
                    />
                </div>
                <div className={styles.answerContainer}>
                    <QuestionText
                        text={<Trans i18nKey="pages.questionaire.partC.questionSix" t={t}>
                            Switch from <strong>{{ lng }}</strong> to {''}
                        </Trans>}
                        number={6}
                    />
                    <div className='answer'>
                        <RadiosAnswerSurvey
                            name="questionSixPartC"
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