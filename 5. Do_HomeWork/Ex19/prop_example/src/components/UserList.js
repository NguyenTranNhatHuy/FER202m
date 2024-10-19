import React from 'react'
import { Link } from 'react-router-dom';

function UserList() {
    const users = [
        { id: 1, firstName: "John", lastName: "Done", age: 25 },
        { id: 2, firstName: "Mary", lastName: "Thompson", age: 35 },
        { id: 3, firstName: "John", lastName: "Smith", age: 30 },
        { id: 4, firstName: "Emily", lastName: "Johnson", age: 25 },
        { id: 5, firstName: "William", lastName: "Davis", age: 34 }
    ];

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}> {user.firstName} {user.lastName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList