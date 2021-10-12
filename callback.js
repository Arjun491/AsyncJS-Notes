// creating blog post
// posts array of objects
/* wap to fetch data from server using async awaits in JS */
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


// write function using simple method and 
// setTimeout is function within its takes callout function //
//1. method one to decalre this function
/*function getPosts(){
    setTimeout(function(){

    },1000);
} */ 

// 2. using arrow method/lamda functions - ES6
function getPosts(){

setTimeout(()=>{

    let output='';

    postsArray.forEach((posts, index)=>{
output+=`<li>${posts.title}</li>`;
    });
    document.body.innerHTML=output;// write into html - after paring array of posts
},1000);
}

getPosts();