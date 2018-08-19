import * as decode from "jwt-decode";

export const setToken = (idToken: string) =>
  Promise.resolve(localStorage.setItem("token", idToken));

export const getToken = () => localStorage.getItem("token");

export const logout = () => {
  localStorage.removeItem("token");
  return Promise.resolve();
};

export const doesTokenExist = (token: string | null) => {
  return token ? true : false;
};

export const isTokenExpired = (token: string | null) => {
  if (!doesTokenExist(token)) {
    return false;
  }
  try {
    const decoded = decode(token as string);
    if ((decoded as { exp: number }).exp < Date.now() / 1000) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const isLoggedIn = () => {
  const token = getToken();
  return doesTokenExist(token) && !isTokenExpired(token);
};
