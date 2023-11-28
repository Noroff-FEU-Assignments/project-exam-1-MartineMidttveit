const url = "https://noroffcors.onrender.com/https://travelblogapi-5b14325836a4.herokuapp.com/api/posts";

export default async function fetchPosts(populate = "") {

    const fetching = await fetch(url + populate);

    if (!fetching.ok) {
        throw new Error(`HTTP error! Status: ${fetching.status}`);
    }
    const posts = await fetching.json();
    return posts;    
}