import Terms from '@components/Terms/Terms'

const Page = ({ params: { lng } }) => {
    return (
        <>
            <Terms
                lng={lng}
            />
        </>
    )
}

export default Page