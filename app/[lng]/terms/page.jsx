import Terms from '@components/Terms/Terms'
import { Suspense } from 'react'
import Loading from './loading'

const Page = ({ params: { lng } }) => {

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Terms
                    lng={lng}
                />
            </Suspense>
        </>
    )
}

export default Page