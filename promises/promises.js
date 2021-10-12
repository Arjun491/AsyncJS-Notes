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




function getPosts()
{
    setTimeout(()=>{
        let output='<ul>';
postsArray.forEach((showPosts, index)=>{
output+="<li>"+showPosts.title+"<\li>";

});

document.body.innerHTML=output;
    }, 1000);
}


function createPosts(post)
{
    return new Promise((resolve, reject)=>{


    });
    setTimeout(()=>{
     postsArray.push(post);
    },2000);
}



// createPosts(   {
//     title: "Post-3",
//     body:"This is post 3:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, dicta!"

// },getPosts);
