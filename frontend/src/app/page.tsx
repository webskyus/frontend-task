import { NextPage } from 'next';
import { redirect } from 'next/navigation';
import { ROUTES } from '@shared/lib/routes';

const Home: NextPage = () => {
  return redirect(ROUTES.ASSETS);
};

export default Home;
