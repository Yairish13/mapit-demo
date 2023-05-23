import { useTranslation } from '@app/i18n';
import Preloader from '@store/Preloader';
import Login from '@components/Login/Login';
import LoginLayout from '@components/Layouts/Login/index.jsx'


export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'translation');
  const req = await fetch('http://localhost:3000/api/company/1');
  const data = await req.json();
  return (
    <>
      <Preloader members={data} />
      <LoginLayout>
        <Login lng={lng} />
      </LoginLayout>
    </>
  )
}

