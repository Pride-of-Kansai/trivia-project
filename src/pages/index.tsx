import { NextPage } from 'next';
import Image from 'next/image';
import { DefaultLayout } from '../layouts/defaultLayout';
import { Button } from '../components/Button';
import { UserVotePage } from 'components/UserVotePage';
import { UserEditPage } from 'components/UserEditPage';

const Index: NextPage = () => {
  return (
    <DefaultLayout>
      <UserVotePage />
    </DefaultLayout>
  );
};

export default Index;
