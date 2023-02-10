export function Admin({users}) {
    return (
        <div>
            <h1>Admin</h1>
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
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}