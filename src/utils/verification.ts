export const ValidatePassword = (password: string, confirmPassword: string) => {
  if (password === confirmPassword) {
    return true;
  }
  return false;
};

export const ValidateEmail = (email: string) => {
  const reg = /\S+@\S+\.\S+/;
  if (reg.test(email)) {
    return true;
  }
  return false;
};

export const CapitalizeData = (data: string) => {
  return data
    .split(" ")
    .map((y) => `${y[0].toUpperCase()}${y.slice(1)}`)
    .join(" ");
};

export const ValidateDataRegister = (
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  if (firstname && lastname && username && email && password) {
    if (ValidateEmail(email) && ValidatePassword(password, confirmPassword)) {
      return true;
    }
  }
  return false;
};

export const ValidateDataLogin = (email: string, password: string) => {
  if (email && password) {
    if (ValidateEmail(email)) {
      return true;
    }
  }
  return false;
};

export const ValidateDataSchoolAndLocalization = (
  localisations: string[],
  schoolId: string
) => {
  if (localisations.length == 0) {
    return alert("Veuillez choisir au moins une ville");
  }
  if (schoolId == "") {
    return alert("Veuillez choisir votre école");
  }
  return true;
};

export const ValidateDataUpdate = (
  email: string,
  password: string,
  confirmPassword: string
) => {
  if (ValidateEmail(email) && ValidatePassword(password, confirmPassword)) {
    return true;
  }
  return false;
};
