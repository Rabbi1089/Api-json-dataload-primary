function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(json => viewUser(json))

}

function viewUser(jsonData){
    const ul = document.getElementById('users-list');
    console.log(ul)
    for (user of jsonData){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }

}

function loadMail(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => viewmail(data))
}

function viewmail(data){
    const ul = document.getElementById('mail-list')
    for ( mail of data){
        const li = document.createElement('li');
        li.innerText = mail.email;
        ul.appendChild(li);
    }
}