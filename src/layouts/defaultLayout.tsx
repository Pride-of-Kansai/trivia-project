import content from '*.png';
import { ReactNode } from 'react';
import { Header } from '../components/Header';

export type Props = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: Props): JSX.Element => {
  const hoge = 1;
  return (
    <>
      <Header />
      {/* TODO: calcでheader分を減らす */}
      <div className="bg-gray-50 h-screen">{children}</div>
    </>
  );
};
