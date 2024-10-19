import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', body: '' });
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/posts?userId=1`);
            const data = await response.json();
            setPosts(data);
        };
        fetchData();
    }, []);

    const handleDeletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
        toast.success('Deleted successfully!')
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (selectedPost) {
            setSelectedPost({ ...selectedPost, [name]: value });
        } else {
            setNewPost({ ...newPost, [name]: value });
        }
    };

    const handleCreatePost = () => {
        if (!newPost.title.trim() || !newPost.body.trim()) {
            toast.error('Please enter both title and body for the post.');
            return;
        }
        const createdPost = { id: posts.length + 1, userId: 1, ...newPost };
        setPosts([...posts, createdPost]);
        setNewPost({ title: '', body: '' });
        toast.success('Post created successfully!');
    };

    const handleEditPost = () => {
        if (!selectedPost) {
            return;
        }
        const updatedPosts = posts.map(post => {
            if (post.id === selectedPost.id) {
                return selectedPost;
            }
            return post;
        });
        setPosts(updatedPosts);
        setSelectedPost(null);
        toast.success('Post updated successfully!');
    };

    const handleOpenEditModal = (post) => {
        setSelectedPost(post);
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary m-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Create
            </button>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {selectedPost ? 'Edit Post' : 'Create a new post'}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={selectedPost ? selectedPost.title : newPost.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="body" className="form-label">Body:</label>
                                <textarea
                                    className="form-control"
                                    id="body"
                                    name="body"
                                    value={selectedPost ? selectedPost.body : newPost.body}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setSelectedPost(null);
                                    setNewPost({ title: '', body: '' });
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={selectedPost ? handleEditPost : handleCreatePost}
                                data-bs-dismiss="modal"
                            >
                                {selectedPost ? 'Save Changes' : 'Create'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">UserId</th>
                        <th scope="col">Title</th>
                        <th scope="col">Post</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button
                                    onClick={() => handleDeletePost(post.id)}
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>

                            </td>
                            <td> <button
                                onClick={() => handleOpenEditModal(post)}
                                type="button"
                                className="btn btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Edit
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PostList;
