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
  return (
    <>
      <Suspense fallback={<><Loader /></>}>
        <QuestionaireFull lng={lng} />
      </Suspense>
    </>
  )
}

export default Page