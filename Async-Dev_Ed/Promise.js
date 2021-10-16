const promiseObj = new Promise((resolve, reject)=>{

setTimeout(()=>{

    console.log('got the user');

    resolve({userName:'Eddy'});
    // good to use Error() constructor
    // reject(new Error("User not logged in!"));
}, 2000);

});

// function resolve(user)
// {
//     console.log("User name: "+user+" Successfully logged in!");
// }

//consume the promise

// promiseObj.then(user=>{
//     console.log(user);
// }).catch(error=>{
//     console.log(error);
//     // if just want to print error message
//     console.log(error.message);


// });


// converting callback last example to promises

// function loginUserInfomation(email, password, callback1)
// {
   
//    setTimeout(()=>{
// // destructor
// console.log('Callback-1: Now we have useremail and videos list');
// callback1({ userEmail: email }) ;

//    },1500);

// }
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
// above code only issue is last method output will show
// we can use async await to add sugar code to make this async like sync


/* above code and videoDetails() method wait few seconds
 after waiting for parent callback method: videoDetails()
 and then videoDetails() wait for loginUserInfo(),
 this is OK for sequence aysnc/depended callbacks
 but what if we want to run every promises at same time without
 waiting*/
 

// promise all for above example







 // another example
 const yt= new Promise(
    (resolve)=>{
        setTimeout(()=>{
   //         console.log('getting stuff from YT!');
resolve({video:[1,2,3,4,5]});
        }, 2000);
    }
 );
 // another example
 const fb= new Promise(
    (resolve)=>{
        setTimeout((e)=>{
//console.log('getting stuff from facebook!');
resolve({user:"Eddy"});
        }, 7000);
    }
 );

 // to promise at same time like not dependent on any function
//  Promise.all(arrays: method names)
// promise all returns all data as single array
const  promise = Promise.all([yt,fb])
.then(result=>{
   console.log(result);
});




// Note the bigger the seconds are more wait does not if method2
// takes more time than method1, then it will wait till method2 finished waiting
// then both will execute at same time

