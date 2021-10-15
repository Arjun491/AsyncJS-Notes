// Problem synchronization code example

console.log('start'); // start


function loginUser(email, password)
{
    setTimeout(()=>{
// destructor
return { userEmail: email };

    },5000);
}

const userName=loginUser('arjun@gmail.com','tango12');
console.log('userName left as; '+userName); // undefined
console.log('finish');  // finish


/** Output
 * start
  undefined
 finish

 //

 why user got set to 'undefined' 
 because of code is running in sync mode

 Solution:

 we can add callbacks functions see below code

 callback function will pass as an parameter
 */

 // Aysnc code using callback function


 console.log('************');
 console.log('Async Code started'); // start


function loginUserInfo(email, password, callback)
{console.log(email);
    
    setTimeout(()=>{
// destructor
console.log('Now we have the data');
callback({ userEmail: email }) ;

    },3000);
    console.log('callback out;'+email);
}

//async callback  function 
function printUserName(userName)
{
console.log(userName);
}

const userNames=loginUserInfo('arjun@gmail.com','tango12', printUserName);

console.log('Async code finish');  // finish

// read more: https://www.javascripttutorial.net/javascript-callback/ 

// or we can convert printUserName() method to arrow/anonymous/mabda method

// loginUserInfo('balli@gmail.com','Sunny$812', user=>{
//     console.log(user);
// });

console.log('Async code finish'); 


// but call back can messed up code because of function inside function
// we call it :  Nesting callbacks and the Pyramid of Doom

// for example if case you want to download three images via async mode
const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';


function download(url, callback1, callback2, callback3)
{
setTimeout(()=>{

  // script to download the picture here
  console.log(`Downloading ${url} ...`);
callback1(url);

},3000);
}



function processPicture(picture)
{
    console.log(`Processing ${picture}`);  
}




/* download and process 3 images in sequence */


// download(url1,function(picture){
//     console.log(`Processing ${picture}`); // will wait 3 sec
//     // download the second picture
//     download(url2,function(picture){
//         console.log(`Processing ${picture}`); // will wait 3 sec
//         // download the third picture
//         download(url3,function(picture){
//             console.log(`Processing ${picture}`); // will wait 3 sec
//         }); 
//     });
// });

/**Output:
 
Downloading https://www.javascripttutorial.net/pic1.jpg ...
Processing https://www.javascripttutorial.net/pic1.jpg
Downloading https://www.javascripttutorial.net/pic2.jpg ...
Processing https://www.javascripttutorial.net/pic2.jpg
Downloading https://www.javascripttutorial.net/pic3.jpg ...
Processing https://www.javascripttutorial.net/pic3.jpg

 */



/* above script works perfectly fine, but this 
callback strategy does not scale well then 
complexity grows significantly.

Nesting many asynchronous functionsinside callbacks is known
as the pyramid of doom or the callback hell:

To avoid the pyramid of doom,
we can use promises or async/await functions.
**/

console.log('More examples on callbacks hell');

// Now I want to ger user videos list after user info in sequence
console.log('************');
console.log('************');
console.log('Async Hell Code started'); // start


function loginUserInfomation(email, password, callback1)
{
   
   setTimeout(()=>{
// destructor
console.log('Callback-1: Now we have useremail and videos list');
callback1({ userEmail: email }) ;

   },1500);

}

// get videos after I get the user information
function getUserVideos(email, callback2)
{
    setTimeout(()=>{
        console.log('callback-2: Videos list');
        callback2 (['Video1', 'Video2', 'Video3']);
    },3000);
}




function getUserPassword(email, videos, callback3){
setTimeout(()=>{
    callback3(['Passowrd1', 'Password2'], 'Password3');
},4000);
}


const user = loginUserInfomation('arjun@gmail.com','tango12', (user)=>
{
console.log(user);
// got videos list after email
getUserVideos(user.userEmail, (videos)=>
{
    console.log(videos);

    getUserPassword(user.userEmail, videos[0], (passwords)=>{
        console.log(videos[0]+" "+passwords);
    });
});
});

console.log('Async callbacks hell finish');

// above code clearly shows how its keeping nesting inside another function
// which make hard to read and hard to keep code clean


// Error handling in case of data failed to fetch from server

// also for onscuess or failure
// we have to write more nested callbacks to resolve
// this issue we use promises js//