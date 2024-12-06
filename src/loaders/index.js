// const getFiles = async () => {
//   const res = await fetch(
//     "http://localhost:8000/api/files"
//   );
//   return res.json();
// };


// export const filesLoader = async () => {
//   return defer({
//     files: getFiles(),
//   });
// };


// export const filesLoader = async () => {
//   const res = await fetch(`http://localhost:8000/api/files/`,{
//     method: 'GET',
//     headers: {
//       Authorization: `Token ${token}`
//     },
//   });
//   const files = await res.json();
//   return files;
// };

export const fileLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:8000/api/files/${id}/`, {
    method: 'GET',
    headers: {
      Authorization: `Token ${token}`
    },
  });
  const file = await res.json();
  return file;
};

