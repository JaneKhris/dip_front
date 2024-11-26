
// const getFiles = async () => {
//   const res = await fetch(
//     "http://localhost:8000/api/files"
//   );
//   return res.json();
// };

export const filesLoader = async () => {
  console.log('loader')
  

  const res = await fetch('http://localhost:8000/api/files/');
  console.log(res.body)

  const files = await res.json();
  console.log(files)

  
  return files
};

// export const postLoader: LoaderFunction = async ({ params }) => {
//   const { id } = params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await res.json();
//   return post;
// };
