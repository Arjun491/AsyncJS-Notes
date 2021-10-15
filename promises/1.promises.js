const postsArray= [


    {
        title: "Post-1",
        body: 'This is post-1'
    },

    {
        title: "Post-2",
        body: 'This is post-2'
    }

];




function getPosts(){

    setTimeout(()=>{
    
        let output='';
    
        postsArray.forEach((posts, index)=>{
    output+=`<li>${posts.title}</li>`;
        });
        document.body.innerHTML=output;// write into html - after paring array of posts
    },1000);
    }


function createPosts(post)
{
    // no callback now only promises
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{


     postsArray.push(post);

const error = false;
if(!error)
{
// resolve the request
resolve();

}
else{
    // found error
    reject('Error: Something went wrong!');
  
    
}

    },2000);
});

}


// createPosts(   {
//     title: "Post Three",
//     body:"This is post 3"

// }).then(getPosts).catch(err=> console.log(err));

// what in case of multiple promises/updates above 


// promise.all
const promise1= Promise.resolve('Hello World!');
const promise2= 10;
const promise3 = new Promise((resolve,reject)=>
{ setTimeout(resolve,2000,'Goodbye!');});


Promise.all([promise1,promise2,promise3]).then((values)=>
 console.log(values));











/**links:
 * 
 * then(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 */


