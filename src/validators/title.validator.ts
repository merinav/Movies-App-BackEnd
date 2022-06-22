const validate = (titleParam: string): boolean => {
  // eslint-disable-next-line
  return /^[a-zA-Z0-9- \.]+$/.test(titleParam);
};
export { validate };
