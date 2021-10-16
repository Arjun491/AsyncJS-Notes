console.log('refactoring the callback example');

function loginUserInfo(email, password){
return new Promise((resolve, reject)=>{
    console.log('data syncing, please wait...');
    setTimeout(()=>
    {
        resolve({userName: email});
    }, 2000);
});
}


function getUserVideos(email)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            resolve(['videos1', 'vidoe2', 'vidoe3']);
            reject(new Error('video list fetch error!'));
        }, 1500);
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

// loginUserInfo('eddy@gmail.com', '123@qwerty')
// .then((user)=>
//   getUserVideos(user.email)

// ).then(videos=> videoDetails(videos[0]))
// .then(details=> console.log(details));


// make a use of async await - syntax sugar
// we have to tell explicitly if function is async await function
// error handling using try and catch //
async function displayUser()
{
    // const loginUser = loginUserInfo('Arjun@yahoo.com','3434@qw');
// convert above to async await
try {
    const loginUser = await loginUserInfo('Arjun@yahoo.com','3434@qw');
const videos = await getUserVideos(loginUser.userName);
const detail = await videoDetails(videos[0]);
 console.log(detail);
} catch (error) {
    console.log(error);
}

}
displayUser(); // 

// above code does not run in parallel sequence
// we can run await promises in parallel using below example
// source: https://programmingwithswift.com/run-async-await-in-parallel-with-javascript/


