// let accessToken = "";

export const setAccessToken = (token: string) => {
  localStorage.setItem(`token`, token);
};

export const getAccessToken = () => {
  return localStorage.getItem("token");
};

export const checkToken = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
