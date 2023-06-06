import QuestionaireFull from '@components/QuestionaireFull/QuestionaireFull';

const Page = async ({ params: {
  lng
} }) => {
  const req = await fetch('http://localhost:3000/api/company/1');
  const data = await req.json();
  return (
    <div>
      <QuestionaireFull members={data} lng={lng} />
    </div>
  )
}

export default Page