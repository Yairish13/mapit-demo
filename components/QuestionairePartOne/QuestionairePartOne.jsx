"use client"
import FirstPart from '@components/FirstPart/FirstPart';
import SecondPart from '@components/SecondPart/SecondPart'
import { useSelector } from 'react-redux';

const QuestionairePartOne = ({ members,lng }) => {
    const activeStep = useSelector((state) => state.general.activeStep);
    return (
        <div>
            {activeStep === 1 ? (<FirstPart members={members} lng={lng} />) : ('')}
            {activeStep === 2 ? (<SecondPart lng={lng} />) : ('')}
        </div>
    )
}

export default QuestionairePartOne