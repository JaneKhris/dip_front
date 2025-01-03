export function getSize(sizeInBytes) {
  if (sizeInBytes < 10 ** 5) {
    return `${(sizeInBytes / 10 ** 3).toFixed(2)} KB`;
  } else {
    return `${(sizeInBytes / 10 ** 6).toFixed(2)} MB`;
  }
}

export function logout(fA,fP, n) {
  localStorage.removeItem("isAuth");
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_isstaff");
  localStorage.removeItem("user_id");
  fA(false);
  fP({
    id: "",
    name: "",
    isStaff: false,
  });
  n("/");
}
