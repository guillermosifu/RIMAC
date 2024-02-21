export const calculateAgePerson = (user) => {
  const { birthDay } = user;
  const birthdayYear = new Date(birthDay).getFullYear();
  const actualYear = new Date().getFullYear();

  return actualYear - birthdayYear;
};
