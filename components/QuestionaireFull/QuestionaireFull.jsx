"use client"
import FifthPart from '@components/QuestionaireParts/FifthPart/FifthPart';
import FirstPart from '@components/QuestionaireParts/FirstPart/FirstPart';
import FourthPart from '@components/QuestionaireParts/FourthPart/FourthPart';
import SecondPart from '@components/QuestionaireParts/SecondPart/SecondPart'
import SeventhPart from '@components/QuestionaireParts/SeventhPart/SeventhPart';
import SixthPart from '@components/QuestionaireParts/SixthPart/SixthPart';
import ThirdPart from '@components/QuestionaireParts/ThirdPart/ThirdPart';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const QuestionaireFull = ({ lng }) => {
    const [members, setMembers] = useState(null);
    const activeStep = useSelector((state) => state.general.activeStep);
    const dispatch = useDispatch()
    // const handleFetch = async () => {
    //     const req = await fetch('https://localhost:3000/api/company/1');
    //     const data = await req.json();
    //     setMembers(data);
    // }
    // useEffect(() => {
    //     handleFetch()
    //     // store.dispatch(setMembers(data))
    // }, [])
    return (
        <div>
            {activeStep === 1 && (<FirstPart lng={lng} dispatch={dispatch} />)}
            {activeStep === 2 && (<SecondPart lng={lng} dispatch={dispatch} />)}
            {activeStep === 3 && (<ThirdPart lng={lng} />)}
            {activeStep === 4 && (<FourthPart lng={lng} />)}
            {activeStep === 5 && (<FifthPart lng={lng} />)}
            {activeStep === 6 && (<SixthPart lng={lng} />)}
            {activeStep === 7 && (<SeventhPart lng={lng} />)}
        </div>
    )
}

export default QuestionaireFull