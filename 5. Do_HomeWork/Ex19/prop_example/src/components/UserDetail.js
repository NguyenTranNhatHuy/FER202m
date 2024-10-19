// UserDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const users = [
        { id: 1, firstName: "John", lastName: "Done", age: 25 },
        { id: 2, firstName: "Mary", lastName: "Thompson", age: 35 },
        { id: 3, firstName: "John", lastName: "Smith", age: 30 },
        { id: 4, firstName: "Emily", lastName: "Johnson", age: 25 },
        { id: 5, firstName: "William", lastName: "Davis", age: 34 }
    ];
    const { id } = useParams();
    const user = users.find(user => user.id === parseInt(id));

    if (!user) {
        return <div>User not found</div>;
    }
    return (
        <div>
            <h2>User Detail</h2>
            <p>{user.firstName} {user.lastName}: {user.age}</p>
        </div>
    );
}

export default UserDetail;
