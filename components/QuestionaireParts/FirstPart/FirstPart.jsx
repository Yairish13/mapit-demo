"use client";
import Stepper from "@components/Stepper/Stepper";
import { useDispatch, useSelector } from "react-redux";
import styles from './FirstPart.module.css'
import Button from "@components/Button/Button";
import { setNextStep, increasePercentage, setSelectedMembers, decreasePercentage } from "../../../store/generalSlice";
import CustomSelect from "@components/CustomSelect/CustomSelect";
import CircleProgress from "@components/CircleProgress/CircleProgress";
import { useEffect, useState } from "react";
import { useTranslation } from "@app/i18n/client";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from 'react-i18next/TransWithoutContext'


const FirstPart = ({ members, lng,dispatch }) => {
  const { t } = useTranslation(lng);
  const [selectedOptions, setSelectedOptions] = useState([]);
  // const dispatch = useDispatch()
  const handleNext = () => {
    dispatch(setSelectedMembers(selectedOptions))
    dispatch(setNextStep())
  }
  const handleCheck = (option) => {
    if (selectedOptions.length === 0) dispatch(increasePercentage())
    const index = selectedOptions.findIndex((item) => item.id === option.id);
    if (index > -1) {
      if (selectedOptions.length === 1) dispatch(decreasePercentage())
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
          <h3 className="title">{t("pages.questionaire.firstPart")}</h3>
          <CircleProgress />
        </div>
        <div className={styles.answerContainer}>
          <QuestionText
            text={
              <Trans i18nKey="pages.questionaire.questionOne" t={t}>
                Switch from <strong>{{ lng }}</strong> to {''}
              </Trans>
            }
            subText={t('pages.questionaire.questionOneSubText')}
            number={1}
          />
          <div className={`${styles.selectDiv} answer`}>
            {members &&
              members[0] &&
              members[0].departments &&
              members[0].departments.map((department, index) => (
                <CustomSelect
                  key={index}
                  onClick={handleCheck}
                  placeholder={t("global.department")}
                  withArrow={true}
                  options={department.workers}
                  selectedOptions={selectedOptions}
                />
              ))}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        {t("pages.questionaire.footerText")}
        <div className={styles.stepper}>
          <Stepper />
        </div>
        <Button mode="primary" onClick={handleNext}>
          {t("global.next")}
        </Button>
      </div>
    </>
  );
}

export default FirstPart