import Stepper from '@components/Stepper/Stepper'
import styles from './QuestionaireFooter.module.css'
import Button from '@components/Button/Button'
import { useTranslation } from 'react-i18next'

const QuestionaireFooter = ({ handleClick, firstPart, wide, isError, withStepper = true }) => {
    const { t } = useTranslation()
    return (
        <div className={wide ? styles.footerWide : styles.footer}>
            {firstPart && t("pages.questionaire.footerText")}
            {withStepper && <div className={styles.stepper}>
                <Stepper />
            </div>}
            {isError && <div className='errDiv'>{firstPart ? t('general.RequiredAtLeastOne') : t('general.pleaseFillRequired')}</div>}
            <Button mode="primary" onClick={(e) => handleClick(e)}>
                {t("global.next")}
            </Button>
        </div>
    )
}

export default QuestionaireFooter