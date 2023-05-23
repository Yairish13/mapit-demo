import Terms from '@components/Terms/Terms'

const Page = async({ params: { lng } }) => {

    return (
        <>
            <Terms
                lng={lng}
            />
        </>
    )
}

export default Page