const getPosts = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        const listaPosts = document.getElementById("post-data");
        listaPosts.innerHTML = "";

        let lista = "";
        data.forEach(post => {
            lista += `<li><span>${post.title}</span><br/>${post.body}</li>`;
            listaPosts.innerHTML = `<ul>${lista}</ul>`;
            
        })
        
    } catch (error) {
        console.log(error);
    }
}