console.log('refactoring the callback example');

function loginUserInfo(email, password){
return new Promise((resolve, reject)=>{
    setTimeout(()=>
    {
        resolve({userName: email});
    }, 3000);
});
}


function getUserVideos(email)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            resolve(['videos1', 'vidoe2', 'vidoe3']);
            reject(new Error('video list fetch error!'));
        }, 2000);
    });
}

function videoDetails(videos)
{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({title: 'Scobby do season-1'});
        reject(new Error('video details fetch error!'));
    },1000);
});
}


// callbacks

loginUserInfo('eddy@gmail.com', '123@qwerty')
.then((user)=>
  getUserVideos(user.email)

).then(videos=> videoDetails(videos[0]))
.then(details=> console.log(details));