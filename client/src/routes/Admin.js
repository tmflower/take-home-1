// import { useState } from "react";

export function Admin({users}) {
    // const [message, setMessage] = useState('');

    // const deleteUser = (evt) => {
    //     const selectedUserId = evt.target.value;
    //     setMessage(`User ${selectedUserId} deleted!`)
    //     users.filter(user => user.id === selectedUserId);     
    // };

    return (
        <div>
            <h1>Admin</h1>
            {/* {message ? <p>{message}</p> : null} */}
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
                    <tr key={i}>                        
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.state}</td>
                        {/* <button value={user.id} onClick={deleteUser}>❌</button> */}
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}