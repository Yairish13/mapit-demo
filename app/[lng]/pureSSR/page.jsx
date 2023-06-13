import { useTranslation } from '@app/i18n';
import Stepper from '@components/Stepper/Stepper';
import CircleProgress from '@components/CircleProgress/CircleProgress';
import { store } from '@store';
import { setMembers } from '@store/generalSlice';
import PureSSR from '@components/PureSSR/PureSSR';

export default async function Page({ params: { lng } }) {
  // const req = await fetch('http://localhost:3000/api/company/1');
  // const data = await req.json();
  // store.dispatch(setMembers(data));
  // console.log(store.entities)
  // console.log(data)
  return (
    <>
      <PureSSR />
    </>
  )
}

