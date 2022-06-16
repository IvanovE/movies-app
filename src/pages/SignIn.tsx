import React from 'react';
import { Input, Button, Container, Text, Stack, Box } from '@chakra-ui/react';
import { MdOutlineFollowTheSigns } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { text } from '../constants/text';
import { useAppDispatch } from '../store/store';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from '../store/slices/authSlice';
import { passwordValidation, emailValidation } from '../utils/validation';

type FormData = {
  email: string;
  password: string;
};

const defaultValues: FormData = {
  email: '',
  password: ''
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

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const history = useHistory<History>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues
  });

  const submitHandler: SubmitHandler<FormData> = (data) => {
    dispatch(signIn(data));
    history.replace('/catalog');
    reset();
  };

  return (
    <Container>
      <Text fontSize='2xl' sx={sx.title}>{text.signIn}</Text>
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

          <Button type='submit' leftIcon={<MdOutlineFollowTheSigns />} variant='outline'>
            {text.signIn}
          </Button>
        </Stack>
      </form>
      <Text sx={sx.redirect}>
        {text.noAccount} <Link style={sx.link} to={'/sign-up'}>{text.signUp}</Link>
      </Text>
    </Container>
  );
};
