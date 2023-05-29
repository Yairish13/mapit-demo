"use client"
import FirstPart from '@components/FirstPart/FirstPart';
import SecondPart from '@components/SecondPart/SecondPart'
import ThirdPart from '@components/ThirdPart/ThirdPart';
import { useSelector } from 'react-redux';

const QuestionairePartOne = ({ members,lng }) => {
    const activeStep = useSelector((state) => state.general.activeStep);
    return (
        <div>
            {activeStep === 1 ? (<FirstPart members={members} lng={lng} />) : ('')}
            {activeStep === 2 ? (<SecondPart lng={lng} />) : ('')}
            {activeStep === 3 ? (<ThirdPart lng={lng} />) : ('')}
        </div>
    )
}

export default QuestionairePartOne