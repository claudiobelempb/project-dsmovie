import { useRouter } from 'next/router';
const ValuationEdit: React.FC = () => {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <>
      <h1>Rota Valuation Edit {router.query.id}</h1>
    </>
  );
};

export default ValuationEdit;
