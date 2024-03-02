function loadPost () {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('post-container')
    for (post of posts){
        const postDiv = document.createElement('div');
        //add class in div
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h4>user id : ${post.userId} </h4>
        <h5>title : ${post.title} </h5>
        <p>Post : ${post.body} </p>
        `
        postContainer.appendChild(postDiv)
    }
}


loadPost()