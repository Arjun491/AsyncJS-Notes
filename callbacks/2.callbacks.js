
const postsArray =[
 
    {
        title: "Post Number-1",
        body:"This is post 1: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, dicta!"

    },
    {
        title: "Post Number-2",
        body:"This is post 2:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, dicta!"

    },
];



function getPosts(){

setTimeout(()=>{

    let output='';

    postsArray.forEach((posts, index)=>{
output+=`<li>${posts.title}</li>`;
    });
    document.body.innerHTML=output;// write into html
},1000);
}

/*to resolve the issue with createPost method we will add a callback*/
function createPosts(newPost, callback)
{
    setTimeout(
        ()=>{
postsArray.push(newPost);
callback();
        }
        ,2000);
}



createPosts(   {
    title: "Post Three",
    body:"This is post 3"

}, getPosts);

