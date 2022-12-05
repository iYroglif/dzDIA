export const getCookie = (name) => {
  const cookie = document.cookie.split("; ").find((cookie) => cookie.split("=")[0] === name);

  return cookie ? cookie.split("=")[1] : undefined;
};
