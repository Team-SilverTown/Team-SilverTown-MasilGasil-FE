const calculateAge = (birthDate: string): number => {
  const birthday = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const monthDifference = today.getMonth() - birthday.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return age;
};

export default calculateAge;
