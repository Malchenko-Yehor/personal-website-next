export const isProdEnv = () => {
  return process.env.NODE_ENV === 'production';
};

export const isDevEnv = () => {
  return process.env.NODE_ENV === 'development';
};