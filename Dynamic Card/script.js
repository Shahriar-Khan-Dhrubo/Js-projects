// dummy data
// const posts = [
//     {
//         title : "posts title 1",
//         body : "post description 1"
//     },
//     {
//         title : "posts title 2",
//         body : "post description 2"
//     },
//     {
//         title : "posts title 3",
//         body : "post description 3"
//     },
//     {
//         title : "posts title 4",
//         body : "post description 4"
//     },
//     {
//         title : "posts title 5",
//         body : "post description 5"
//     },
//     {
//         title : "posts title 6",
//         body : "post description 6"
//     },
//     {
//         title : "posts title 7",
//         body : "post description 7"
//     },
//     {
//         title : "posts title 8",
//         body : "post description 8"
//     }
// ]

// fetch data
// const fetchData = async (config) => {
//     try{
//         const res = await axios(config);
//         return res.data;
//     }catch{
//         throw new Error("data is not fetched");
//     }
// }

// practice
const fetchData = async (config)=>{
    try{
        let res = await axios(config);
        return res.data; 
    }catch{
        throw new Error("data is not fetched");
    }
}

{/* 
    <h4 class="post_title">post title 1</h4>
    <p class="post_desc">post description 1</p>
*/}

//selection
let postsElement=document.querySelector(".posts");

const loadAllData = async () =>{
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    posts.forEach((post)=>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = 
        `<h4 class="post_title">${post.title}</h4>
        <p class="post_desc">${post.body}</p>`;
        postsElement.appendChild(postElement);
    });
};

loadAllData();