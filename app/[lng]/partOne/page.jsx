import QuestionairePartOne from '@components/QuestionairePartOne/QuestionairePartOne';

const Page = async ({ params: {
  lng
} }) => {
  const req = await fetch('http://localhost:3000/api/company/1');
  const data = await req.json();
  console.log(data);
  return (
    <div>
      <QuestionairePartOne members={data} lng={lng} />
    </div>
  )
}

export default Page