"use client"
import styles from './Stepper.module.css';
import WhiteCheck from '../../public/assets/icons/whiteCheck.svg'
import { useSelector } from 'react-redux';

const Stepper = () => {
    const steps = useSelector((state) => state.general.steps);
    const activeStep = useSelector((state) => state.general.activeStep);
    // console.log(members, 'company')
    // const [activeStep, setActiveStep] = useState(1)

    // const nextStep = () => {
    //     if (activeStep <= steps.length ) setActiveStep(activeStep + 1)
    // }

    // const prevStep = () => {
    //     if (activeStep > 1) setActiveStep(activeStep - 1)
    // }

    // const totalSteps = steps.length

    // const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`
    return (
        <div className={styles.mainContainer}>
            <div className={styles.stepContainer} >
                {steps.map(({ step }) => (
                    <div className={styles.stepWrapper} key={step}>
                        <div className={`${styles.stepStyle} ${activeStep > step ? styles.completed : styles.incompleted}`}>
                            {activeStep > step ? (
                                <div><WhiteCheck /></div>
                            ) : (
                                activeStep === step ?
                                    <div className={styles.notCheck}></div>
                                    : <div></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className={styles.buttonsContainer}>
                <div className={styles.buttonStyle} onClick={prevStep} disabled={activeStep === 1}>
                    Previous
                </div>
                <div className={styles.buttonStyle} onClick={nextStep} disabled={activeStep === totalSteps}>
                    Next
                </div>
            </div> */}
        </div>
    )
}

export default Stepper;
