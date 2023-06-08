import { Suspense } from 'react'
import Loader from '@components/Loader/Loader'
import dynamic from 'next/dynamic'
const Terms = dynamic(
    () => import('../../../components/Terms/Terms'),
    { ssr: false }
  )
const Page = ({ params: { lng } }) => {

    return (
        <>
            <Suspense fallback={<><Loader /></>}>
                <Terms
                    lng={lng}
                />
            </Suspense>
        </>
    )
}

export default Page