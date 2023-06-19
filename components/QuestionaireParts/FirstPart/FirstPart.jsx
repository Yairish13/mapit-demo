"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from './FirstPart.module.css'
import { setNextStep, setSelectedMembers, setAnsweredQuestions, resetAnsweredQuestions, setAnswers } from "../../../store/generalSlice";
import CustomSelect from "@components/CustomSelect/CustomSelect";
import { useEffect, useState } from "react";
import { useTranslation } from "@app/i18n/client";
import QuestionText from "@components/QuestionText/QuestionText";
import { Trans } from 'react-i18next/TransWithoutContext'
import QuestionaireHeader from "@components/QuestionaireHeader/QuestionaireHeader";
import QuestionaireFooter from "@components/QuestionaireFooter/QuestionaireFooter";


const FirstPart = ({ members, lng }) => {
  const isFinished = useSelector((state) => state.general.isFinished);
  const { t } = useTranslation(lng);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const handleNext = () => {
    console.log(selectedOptions, 'selectedOptions');
    if (selectedOptions.length === 0) {
      setIsError(true)
    } else {
      const selectedWithNoDuplicate = selectedOptions.filter((obj, index) => {
        return index === selectedOptions.findIndex(o => obj.id === o.id);
      });
      dispatch(setSelectedMembers(selectedWithNoDuplicate))
      dispatch(setAnswers({ questionOne: selectedWithNoDuplicate }))
      dispatch(setNextStep())
    }
  }
  const handleCheck = (option) => {
    if (selectedOptions.length === 0) {
      dispatch(setAnsweredQuestions('questionOne'))
      setIsError(false)
    }
    const index = selectedOptions.findIndex((item) => item.id === option.id);
    if (index > -1) {
      if (selectedOptions.length === 1) dispatch(resetAnsweredQuestions())
      setSelectedOptions((prevOptions) => {
        const updatedOptions = [...prevOptions];
        updatedOptions.splice(index, 1);
        return updatedOptions;
      });
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
  }
  useEffect(() => {
    if (isFinished) router.push(`${lng}/finish`)
  }, [])
  return (
    <>
      <div className={styles.container}>
        <QuestionaireHeader
          title={t("pages.questionaire.firstPart")}
        />
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
          <div className={`${styles.selectDiv} ${isError ? 'error' : ''} answer`}>
            {members &&
              members[0] &&
              members[0].departments &&
              members[0].departments.map((department, index) => (
                <CustomSelect
                  key={index}
                  onChange={handleCheck}
                  placeholder={t("global.department")}
                  withArrow={true}
                  options={department.workers}
                  selectedOptions={selectedOptions}
                />
              ))}
          </div>
        </div>
      </div>
      <QuestionaireFooter
        isError={isError}
        handleClick={handleNext}
        firstPart={true}
      />
    </>
  );
}

export default FirstPart