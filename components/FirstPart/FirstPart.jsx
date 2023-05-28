"use client";
import Stepper from "@components/Stepper/Stepper";
import { useDispatch, useSelector } from "react-redux";
import styles from './FirstPart.module.css'
import Button from "@components/Button/Button";
import { setNextStep, setPercentage, setSelectedMembers } from "../../store/generalSlice";
import CustomSelect from "@components/CustomSelect/CustomSelect";
import CircleProgress from "@components/CircleProgress/CircleProgress";
import { useState } from "react";


const FirstPart = ({ }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const members = useSelector((state) => state.general.members);
  console.log(members, 'members');
  const dispatch = useDispatch()
  const handleNext = () => {
    dispatch(setSelectedMembers(selectedOptions))
    dispatch(setNextStep())
    dispatch(setPercentage())
    console.log(selectedOptions);
  }
  const handleCheck = (option) => {
    const index = selectedOptions.findIndex((item) => item.id === option.id);
    if (index > -1) {
      setSelectedOptions((prevOptions) => {
        const updatedOptions = [...prevOptions];
        updatedOptions.splice(index, 1);
        return updatedOptions;
      });
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
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
          <div className={styles.question}>1. בחר את העובדים והמנהלים בארגון</div>
          <div className={styles.answer}>
            {members && members[0] && members[0].departments && members[0].departments.map((department, index) => (
              <CustomSelect
                key={index}
                onClick={handleCheck}
                placeholder='מחלקה'
                withArrow={true}
                options={department.workers}
                selectedOptions={selectedOptions}
              />
            ))}
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