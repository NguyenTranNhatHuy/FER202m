import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [posts, setPosts] = useState([]);
    const userId = 1;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://springboot-azuresql1.azurewebsites.net/employees`);
            const data = await response.json();
            setPosts(data);
        };
        fetchData();
    }, [userId]);

    return (
        <div>
            <h1>Demo useEffect</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">DEpt</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.dept}</td>
                            <td>{post.name}</td>
                            <td>{post.salary}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    )
}
