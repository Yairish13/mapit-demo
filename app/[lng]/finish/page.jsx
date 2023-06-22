import Loader from "@components/Loader/Loader"
import dynamic from "next/dynamic"
import { Suspense } from "react"
const FinishComp = dynamic(
    () => import('../../../components/FinishComp/FinishComp'),
    { ssr: false }
)
const Page = ({ params: { lng } }) => {
    return (
        <>
            <Suspense fallback={<><Loader /></>}>
                <FinishComp lng={lng} />

            </Suspense>
        </>
    )
}

export default Page