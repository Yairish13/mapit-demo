import dynamic from 'next/dynamic';
import Preloader from '@store/Preloader';
import { store } from '@store';
import { setMembers } from '@store/generalSlice';
import Providers from '@store/Providers';
const Login = dynamic(
  () => import('../../components/Login/Login'),
  { ssr: false }
)
const LoginLayout = dynamic(
  () => import('../../components/Layouts/Login'),
  { ssr: false }
)


export default async function Home({ params: { lng } }) {
  return (
    <>
      <Preloader/>
      <Providers>
        <LoginLayout lng={lng}>
          <Login lng={lng} />
        </LoginLayout>
      </Providers>
    </>
  )
}

