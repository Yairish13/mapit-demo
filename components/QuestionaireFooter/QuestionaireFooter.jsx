import Stepper from '@components/Stepper/Stepper'
import styles from './QuestionaireFooter.module.css'
import Button from '@components/Button/Button'
import { useTranslation } from 'react-i18next'

const QuestionaireFooter = ({ handleClick, firstPart, wide, withStepper = true }) => {
    const { t } = useTranslation()
    return (
        <div className={wide ? styles.footerWide : styles.footer}>
            {firstPart && t("pages.questionaire.footerText")}
            {withStepper && <div className={styles.stepper}>
                <Stepper />
            </div>}
            <Button mode="primary" onClick={(e) => handleClick(e)}>
                {t("global.next")}
            </Button>
        </div>
    )
}

export default QuestionaireFooter