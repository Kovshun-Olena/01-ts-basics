import './style.css'

// import axios from "axios";

// async function fetchPosts() {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts'
//   );
//   return response.data;
// }

// fetchPosts().then((posts) => {
//   console.log(posts[0].title);
// });


import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}
    
const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
