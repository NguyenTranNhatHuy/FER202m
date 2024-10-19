export const fetchUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const user = await response.json();
    return user;
};

export const fetchPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const post = await response.json();
    return post;
};
