"use client"
import FifthPart from '@components/QuestionaireParts/FifthPart/FifthPart';
import FirstPart from '@components/QuestionaireParts/FirstPart/FirstPart';
import FourthPart from '@components/QuestionaireParts/FourthPart/FourthPart';
import SecondPart from '@components/QuestionaireParts/SecondPart/SecondPart'
import SeventhPart from '@components/QuestionaireParts/SeventhPart/SeventhPart';
import SixthPart from '@components/QuestionaireParts/SixthPart/SixthPart';
import ThirdPart from '@components/QuestionaireParts/ThirdPart/ThirdPart';
import { useDispatch, useSelector } from 'react-redux';

const QuestionaireFull = ({ members, lng }) => {
    const activeStep = useSelector((state) => state.general.activeStep);
    const dispatch = useDispatch()

    return (
        <div>
            {activeStep === 1 && (<FirstPart members={members} lng={lng} dispatch={dispatch} />)}
            {activeStep === 2 && (<SecondPart lng={lng} dispatch={dispatch} />)}
            {activeStep === 3 && (<ThirdPart lng={lng} />)}
            {activeStep === 4 && (<FourthPart lng={lng} />)}
            {activeStep === 5 && (<FifthPart members={members} lng={lng} />)}
            {activeStep === 6 && (<SixthPart lng={lng} />)}
            {activeStep === 7 && (<SeventhPart lng={lng} />)}
        </div>
    )
}

export default QuestionaireFull