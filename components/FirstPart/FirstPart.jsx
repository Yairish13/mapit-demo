"use client";
import Stepper from "@components/Stepper/Stepper";
import { useDispatch, useSelector } from "react-redux";
import styles from './FirstPart.module.css'
import Button from "@components/Button/Button";
import { setNextStep, setPercentage, setSelectedMembers } from "../../store/generalSlice";
import CustomSelect from "@components/CustomSelect/CustomSelect";
import CircleProgress from "@components/CircleProgress/CircleProgress";
import { useState } from "react";
import { useTranslation } from "@app/i18n/client";


const FirstPart = ({ members, lng }) => {
  const { t } = useTranslation(lng);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dispatch = useDispatch()
  const handleNext = () => {
    dispatch(setSelectedMembers(selectedOptions))
    dispatch(setNextStep())
    dispatch(setPercentage())
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
          <h3 className="title">
            {t('pages.questionaireOne.firstPart')}
          </h3>
          <CircleProgress />
        </div>
        <div className={styles.answerContainer}>
          1.
          <div className='question'>
            {t('pages.questionaireOne.questionOne')}
            <div className={styles.subTextQuestion}>
              {t('pages.questionaireOne.questionOneSubText')}
            </div>
          </div>
          <div className={`${styles.selectDiv} answer`}>
            {members && members[0] && members[0].departments && members[0].departments.map((department, index) => (
              <CustomSelect
                key={index}
                onClick={handleCheck}
                placeholder={t('global.department')}
                withArrow={true}
                options={department.workers}
                selectedOptions={selectedOptions}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footer} >
        {t('pages.questionaireOne.footerText')}
        <div className={styles.stepper}><Stepper /></div>
        <Button mode="primary" onClick={handleNext}>{t('global.next')}</Button>
      </div>
    </>
  )
}

export default FirstPart