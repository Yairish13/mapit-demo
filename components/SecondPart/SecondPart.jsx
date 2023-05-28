/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Stepper from "@components/Stepper/Stepper";
import { useDispatch, useSelector } from "react-redux";
import styles from './SecondPart.module.css'
import Button from "@components/Button/Button";
import { setNextStep, setPercentage } from "../../store/generalSlice";
import CircleProgress from "@components/CircleProgress/CircleProgress";
import RadioButton from "@components/RadioButton/RadioButton";


const SecondPart = ({ }) => {
    const selectedMembers = useSelector((state) => state.general.selectedMembers);
    console.log(selectedMembers, 'selectedMembers');
    const dispatch = useDispatch()
    const handleNext = () => {
        dispatch(setNextStep())
        dispatch(setPercentage())
    }
    const handleCheck = (option) => {
        console.log(option)
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerDiv}>
                    <h3 className="title">חלק א</h3>
                    <CircleProgress />
                </div>
                <div className={styles.answerContainer}>
                    <div className={styles.question}>
                        <div><span>2. {' '}</span>באיזו יג יגשגח חגחככ גחכצמגל</div>
                        <div className={styles.subTextQuestion}> "לא רלוונטי" - הכוונה, שעבודת הממשק או סוג הקשר אינם דורשים זאת</div>
                    </div>
                    <div className={styles.answer}>
                        {/* {.map((department, index) => (

                        ))} */}
                    </div>
                </div>
                <div className={styles.answerContainer}>
                    <div className={styles.question}>
                        <div><span>3. {' '} </span>
                            באיזו מידה הינך רוצה לעשות א ב ג
                        </div>
                        <div className={styles.subTextQuestion}> "לא רלוונטי" - הכוונה, שעבודת הממשק או סוג הקשר אינם דורשים זאת</div>
                    </div>
                    <div className={styles.answer}>

                    </div>
                </div>
            </div>
            <div className={styles.footer} >
                <div className={styles.stepper}><Stepper /></div>
                <Button mode="primary" onClick={handleNext}>הבא</Button>
            </div>
        </>
    )
}

export default SecondPart