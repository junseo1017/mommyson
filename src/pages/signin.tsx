/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import SignInLayout from '../components/SignIn/SignInLayout';
import SignInStart from '../components/SignIn/SignInStart';
import SignInUserCheck from 'src/components/SignIn/SignInUserCheck';
import { useSelector } from 'react-redux';
import { PState } from '../.../../reducers/rootreducer';

const SignIn = () => {
  const { status } = useSelector<PState, any>((state) => state.signin);

  let SignInflow = null;
  if (status === 'starting') {
    SignInflow = <SignInStart />;
  } else if (status === 'checking') {
    SignInflow = <SignInUserCheck />;
  } else if (status === '') {
  }

  return <SignInLayout>{SignInflow}</SignInLayout>;
};

export default SignIn;
