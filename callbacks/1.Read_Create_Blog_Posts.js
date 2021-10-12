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


function createPosts(newPost)
{
    setTimeout(
        ()=>{
postsArray.push(newPost);

        }
        ,2000);
}



createPosts(   {
    title: "Post Number-3",
    body:"This is post 3:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, dicta!"

});
// createPosts is set to 2sec and took longer than getPosts() to show new added posts 

// gh issue create --title "createPosts() is slower than getPosts()" --body "server took 1 sec to show posts than DOM already showed with results so createPosts() never got chance to run"
//callings
getPosts();

createPosts(); // its slower than getPosts() as soon as it call DOM shows results from getPosts as it will never get chance

// to resolve above issue we use promises.js