import { useState } from "react";

export function Admin({users}) {
    const [message, setMessage] = useState('');

    const deleteUser = (evt) => {
        const selectedUserId = evt.target.value;
        setMessage(`User ${selectedUserId} deleted!`)
        users.filter(user => user.id === selectedUserId);     
    };

    return (
        <div>
            {message ? <p>{message}</p> : null}
            {users.map((user, i) => 
            <div key={i} >                
                {user.id}
                {user.firstName}
                {user.lastName}
                {user.email}
                {user.state}
                <button value={user.id} onClick={deleteUser}>❌</button>
            </div>
            )}
            {/* <h1>Admin</h1>
            <table><caption>Yodlers</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {users.map((user, i) =>
                    <tr onClick={deleteUser} key={i}>                        
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.state}</td>
                        <td>❌</td>
                    </tr>)}
                </tbody>
            </table> */}
        </div>
    )
}