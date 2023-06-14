"use client"
import dynamic from 'next/dynamic';
const FirstPart = dynamic(
    () => import('../../components/QuestionaireParts/FirstPart/FirstPart'),
    { ssr: false }
)
import FifthPart from '@components/QuestionaireParts/FifthPart/FifthPart';
// import FirstPart from '@components/QuestionaireParts/FirstPart/FirstPart';
import FourthPart from '@components/QuestionaireParts/FourthPart/FourthPart';
import SecondPart from '@components/QuestionaireParts/SecondPart/SecondPart'
import SeventhPart from '@components/QuestionaireParts/SeventhPart/SeventhPart';
import SixthPart from '@components/QuestionaireParts/SixthPart/SixthPart';
import ThirdPart from '@components/QuestionaireParts/ThirdPart/ThirdPart';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import members from '../../app/api/utils/company.json'


const QuestionaireFull = ({ lng }) => {
    // const [members, setMembers] = useState(null);
    const activeStep = useSelector((state) => state.general.activeStep);
    const dispatch = useDispatch()
    const { register, handleSubmit, setValue, formState: { errors }, getValues } = useForm({
        mode: 'all',
    });
    const handleFetch = async () => {
        // const req = await fetch('https://localhost:3000/api/company/1');
        // const data = await req.json();
        // console.log(data);
        // dispatch(setMembers(data))
        // setMembers(data);
    }
    useEffect(() => {
        handleFetch()

    }, [])
    return (
        <div>
            {activeStep === 1 && (
                <FirstPart
                    members={members}
                    lng={lng}
                    dispatch={dispatch}
                />)}
            {activeStep === 2 && (
                <SecondPart
                    members={members}
                    lng={lng}
                    register={register}
                    handleSubmit={handleSubmit}
                    setValue={setValue}
                    errors={errors}
                    getValues={getValues}
                    dispatch={dispatch} />)}
            {activeStep === 3 && (
                <ThirdPart
                    lng={lng}
                    register={register}
                    handleSubmit={handleSubmit}
                    setValue={setValue}
                    errors={errors}
                    getValues={getValues}
                    dispatch={dispatch}
                />)}
            {activeStep === 4 && (
                <FourthPart
                    lng={lng}
                    register={register}
                    handleSubmit={handleSubmit}
                    setValue={setValue}
                    errors={errors}
                    getValues={getValues}
                    dispatch={dispatch}
                />)}
            {activeStep === 5 && (
                <FifthPart
                    lng={lng}
                    dispatch={dispatch} />)}
            {activeStep === 6 && (
                <SixthPart
                    lng={lng}
                    register={register}
                    handleSubmit={handleSubmit}
                    setValue={setValue}
                    errors={errors}
                    getValues={getValues}
                    dispatch={dispatch}
                />)}
            {activeStep === 7 && (
                <SeventhPart
                    lng={lng}
                    register={register}
                    handleSubmit={handleSubmit}
                    setValue={setValue}
                    errors={errors}
                    getValues={getValues}
                    dispatch={dispatch} />)}
        </div>
    )
}

export default QuestionaireFull