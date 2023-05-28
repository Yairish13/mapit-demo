"use client"
import { useSelector } from 'react-redux';
import FirstPart from '@components/FirstPart/FirstPart'
import SecondPart from '@components/SecondPart/SecondPart'

const Page = () => {
  const activeStep = useSelector((state) => state.general.activeStep);
  console.log(activeStep);
  // const activeStep = store.getState().general.activeStep;
  // const req = await fetch('http://localhost:3000/api/company/1');
  // const data = await req.json();
  // console.log(store.getState().general, 'activeStep');
  return (
    <div>
      {activeStep === 1 ? (<FirstPart />) : ('')}
      {activeStep === 2 ? (<SecondPart />) : ('')}
    </div>
  )
}

export default Page