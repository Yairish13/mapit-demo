"use client";
import Stepper from "@components/Stepper/Stepper";
import { useDispatch } from "react-redux";
import styles from './FirstPart.module.css'
import Button from "@components/Button/Button";
import { setNextStep, setPercentage } from "../../store/generalSlice";
import CustomSelect from "@components/CustomSelect/CustomSelect";
import CircleProgress from "@components/CircleProgress/CircleProgress";


const FirstPart = ({ members }) => {

  const dispatch = useDispatch()
  const handleNext = () => {
    dispatch(setNextStep())
    dispatch(setPercentage())
  }
  const departmentA = members[0].departments[0].workers;
  const departmentB = members[0].departments[1].workers;
  const departmentC = members[0].departments[2].workers;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerDiv}>
        <h3 className="title">חלק א</h3>
        <CircleProgress />
          </div>
        <div className={styles.answerContainer}>
          <div className={styles.question}>1. בחר את העובדים והמנהלים בארגון</div>
          <div className={styles.answer}>
            <CustomSelect placeholder='מחלקה' withArrow={true} options={departmentA} />
            <CustomSelect placeholder='מחלקה' withArrow={true} options={departmentB} />
            <CustomSelect placeholder='מחלקה' withArrow={true} options={departmentC} />
          </div>
        </div>
      </div>
      <div className={styles.footer} >
        השאלות הבאות שלפניך (2-8) מתייחסות לשמות שבחרת בשאלה 1
        <div className={styles.stepper}><Stepper /></div>
        <Button mode="primary" onClick={handleNext}>הבא</Button>
      </div>
    </>
  )
}

export default FirstPart