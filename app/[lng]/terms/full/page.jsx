import dynamic from 'next/dynamic'
const FullTerms = dynamic(
    () => import('../../../../components/FullTerms/FullTerms'),
    { ssr: true }
  )
const Page = async ({ params: { lng } }) => {

    return (
        <FullTerms lng={lng} />
    )
}

export default Page