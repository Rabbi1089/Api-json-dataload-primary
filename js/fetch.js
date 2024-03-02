// function loadData() {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json))
// }

// loadData();

function loadData2(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => console.log(json))
}

loadData2();

// function loadUser (){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(Response => Response.json())
//         .then(json => displayUser(json))
      
// }
// loadUser();

// function displayUser(data){
//         console.log('Here you are find data from api');
//         console.log(data);
// }


