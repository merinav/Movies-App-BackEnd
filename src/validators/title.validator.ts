const validate = (titleParam: string): boolean => {
  return /^[A-Za-z0-9 -.-]*$/.test(titleParam);
};
//luzta kai title=' ' arba '.'
export { validate };
