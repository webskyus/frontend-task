import { NextPage } from 'next';
import { redirect } from 'next/navigation';
import { ROUTES } from '@shared/config/routes';

const Home: NextPage = () => {
  return redirect(ROUTES.ASSETS);
};

export default Home;
