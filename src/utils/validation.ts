export const emailValidation = {
  required: true,
  pattern: /^\S+@\S+\.\S+$/
};

export const passwordValidation = {
  required: true,
  minLength: 6
};

export const usernameValidation = {
  required: true
};

export const passwordConfirmValidation = {
  required: true
};
