const validate = (titleParam: string): boolean => {
  // eslint-disable-next-line
  return /^[a-zA-Z0-9- \.]+$/.test(titleParam);
};
export { validate };

///^(?!.*---)( {1,3})?([-.\p{L}\p{M}\p{N}]+( {1,3})?)*$/gu

//return /^[a-zA-Z0-9- \.]+$/.test(titleParam);
