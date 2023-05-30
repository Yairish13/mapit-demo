"use client"
import styles from './Stepper.module.css';
import WhiteCheck from '../../public/assets/icons/whiteCheck.svg'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Stepper = ({ type }) => {
    const steps = useSelector((state) => state.general.steps);
    const activeStep = useSelector((state) => state.general.activeStep);
    // console.log(members, 'company')
    // const [activeStep, setActiveStep] = useState(1)

    // const nextStep = () => {
    //     console.log(activeStep);

    //     if (activeStep <= steps.length) setActiveStep(activeStep + 1)
    // }

    // const prevStep = () => {
    //     console.log(activeStep);
    //     if (activeStep > 1) setActiveStep(activeStep - 1)
    // }
    return (
        <div className={type === 'vertical' ? styles.mainContainerVertically : styles.mainContainer}>
            <div className={type === 'vertical' ? styles.stepContainerVertically : styles.stepContainer} >
                {steps.map(({ step, label }) => (
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
        </div>
    )
}

export default Stepper;
