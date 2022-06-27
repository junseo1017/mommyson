import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';

type signInForm = {
  userid: string;
  userpw: string;
};

const SignIn: NextPage = () => {
  const { handleSubmit, register } = useForm<signInForm>();
  const onSignInSubmitHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={onSignInSubmitHandler}>
        <input
          type="text"
          placeholder="Please Input your ID"
          {...register('userid', {
            minLength: {
              value: 5,
              message: 'Username must be longer than 5 characters',
            },
          })}
        />
        <input type="password" placeholder="Please Input your password" {...register('userpw')} />

        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default SignIn;
