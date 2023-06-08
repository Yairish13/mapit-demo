import Loader from '@components/Loader/Loader';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const QuestionaireFull = dynamic(
  () => import('../../../components/QuestionaireFull/QuestionaireFull'),
  { ssr: false }
)
const Page = async ({ params: {
  lng
} }) => {
  const req = await fetch('http://localhost:3000/api/company/1');
  const data = await req.json();
  return (
    <>
      <Suspense fallback={<><Loader /></>}>
        <QuestionaireFull members={data} lng={lng} />
      </Suspense>
    </>
  )
}

export default Page