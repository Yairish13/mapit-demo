import Terms from '@components/Terms/Terms'
import { Suspense } from 'react'
import Loader from '@components/Loader/Loader'

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