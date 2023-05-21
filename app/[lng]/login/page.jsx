"use Client"
import Login from '@components/Login/Login';


const Page = ({ params: { lng } }) => {

    return (
        <Login lng={lng} />
    )
}

export default Page;
