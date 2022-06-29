/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import SignInLayout from '../components/SignIn/SignInLayout';
import SignInUserCheck from '../components/SignIn/SignInUserCheck';
const SignIn = () => {
  return (
    <SignInLayout>
      <SignInUserCheck />
    </SignInLayout>
  );
};

export default SignIn;
