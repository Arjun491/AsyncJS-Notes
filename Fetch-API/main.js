// fake users data from site reqres.com
// console.log(fetch('https://reqres.in/api/users'));
// resonse will return a promise which we then need to convert into json
// fetch('https://reqres.in/api/users').then(response=> {console.log(response)});


// fetch('https://reqres.in/api/users/23')
// .then(response=> { return response.json()})
// . then(data => console.log(data));

// what if wamt to locate a user that does not exist
// fetch('https://reqres.in/api/users/23')
// .then(response=> { return response.json()})
// . then(data => console.log(data));

// above code will show 404 error will show as 23 client id does not exist //


// fetch('https://reqres.in/api/users/23').then(res=>{return res.json();})
// .then(jsonData=>console.log(jsonData))
// .catch(error=> console.log('404 error!, please check your data.'));


// we still get same error- main.js:18 GET https://reqres.in/api/users/23 404
// (anonymous) @ main.js:18
// main.js:19 {}
// means no matter what fetch wont fail to send data only time catch will run when we have network issues

console.log('*********');

// task-1 - create a user with name- user1



fetch('https://reqres.in/api/users',{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
  body: JSON.stringify({   // converting js array object to  JSON data format
    name: 'user-1'
})
})
.then(res=>{ 

        if(res.ok==true)
        return res.json();
        else
        return false;
   })
.then(jsonData => {console.log(jsonData);});




