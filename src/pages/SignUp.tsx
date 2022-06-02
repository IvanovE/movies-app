import React from 'react';
import { Container, Input, Button, Box, Stack, Text } from '@chakra-ui/react';
import { MdOutlineFollowTheSigns } from 'react-icons/md';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../store/slices/authSlice';
import { useAppDispatch } from '../store/store';
import { text } from '../constants/text';
import {
  passwordValidation,
  passwordConfirmValidation,
  emailValidation,
  usernameValidation
} from '../utils/validation';

type FormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const defaultValues: FormData = {
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
};

const sx = {
  title: {
    textAlign: 'center',
    marginY: '2rem'
  },
  redirect: {
    textAlign: 'center'
  },
  link: {
    color: 'teal',
    textDecoration: 'underline'
  },
  inputError: {
    borderColor: 'red'
  },
  textError: {
    color: 'red'
  }
};

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const history = useHistory<History>();
  const {
    control,
    handleSubmit,
    setError,
    reset,
    resetField,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues
  });

  const submitHandler: SubmitHandler<FormData> = ({
    email,
    username,
    password,
    confirmPassword
  }) => {
    if (password !== confirmPassword) {
      setError(
        'confirmPassword',
        { type: 'passwordMismatch' },
        { shouldFocus: true }
      );
      resetField(
        'confirmPassword',
        { keepError: true }
      );
      return;
    }
    dispatch(signUp({
      email,
      username,
      password
    }));
    history.push('/sign-in');
    reset();
  };

  return (
    <Container>
      <Text fontSize='2xl' sx={sx.title}>{text.signUp}</Text>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack spacing={3}>
          <Controller 
            name='email'
            control={control}
            rules={emailValidation}
            render={({ field }) =>
              <Input
                variant='outline'
                placeholder='Email'
                sx={errors.email && sx.inputError}
                {...field}
              />
            }
          />
          {errors?.email &&
          <Box sx={sx.textError}>
            {errors.email?.type === 'required' && text.emailRequiredError}
            {errors.email?.type === 'pattern' && text.emailPatternError}
          </Box>
          }

          <Controller
            name='username'
            control={control}
            rules={usernameValidation}
            render={({ field }) =>
              <Input
                variant='outline'
                placeholder='Username'
                sx={errors.username && sx.inputError}
                {...field}
              />
            }
          />
          {errors?.username &&
            <Box sx={sx.textError}>
              {errors.username?.type === 'required' && text.usernameRequiredError}
            </Box>
          }

          <Controller
            name='password'
            control={control}
            rules={passwordValidation}
            render={({ field }) =>
              <Input
                variant='outline'
                type='password'
                placeholder='Password'
                sx={errors.password && sx.inputError}
                {...field}
              />
            }
          />
          {errors?.password &&
            <Box sx={sx.textError}>
              {errors.password?.type === 'required' && text.passwordRequiredError}
              {errors.password?.type === 'minLength' && text.passwordMinLengthError}
            </Box>
          }

          <Controller
            name='confirmPassword'
            control={control}
            rules={passwordConfirmValidation}
            render={({ field }) =>
              <Input
                variant='outline'
                placeholder='Confirm password'
                type='password'
                sx={errors.confirmPassword && sx.inputError}
                {...field}
              />
            }
          />
          {errors.confirmPassword &&
            <Box sx={sx.textError}>
              {errors.confirmPassword?.type === 'required' && text.confirmationRequiredError}
              {errors.confirmPassword?.type === 'passwordMismatch' && text.passwordMismatchError}
            </Box>
          }

          <Button type='submit' leftIcon={<MdOutlineFollowTheSigns />} variant='outline'>
            {text.signUp}
          </Button>
        </Stack>
      </form>
      <Text sx={sx.redirect}>
        {text.haveAccount} <Link style={sx.link} to={'/sign-in'}>{text.signIn}</Link>
      </Text>
    </Container>
  );
};
