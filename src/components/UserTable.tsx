import { useUsers } from "../hooks/useUsers";

const UserTable = () => {
    const {users} = useUsers();
    console.log(users);
    return (
        <div className = "p-4">
            <table className="w-full border shadow">
                 <thead className="bg-gray-100">
                    <tr>
                   
                        <th className="py-2 px-3 text-sm text-left">Name</th>
                        <th className="py-2 px-3 text-sm text-left">Email</th>
                        <th className="py-2 px-3 text-sm text-left">City</th>
                        <th className="py-2 px-3 text-sm text-left">Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( (user) => (
                            <tr key={user.id} className="border">
                                <td className="py-2 px-3 text-sm">{user.name}</td>
                                <td className="py-2 px-3 text-sm">{user.email}</td>
                                <td className="py-2 px-3 text-sm">{user.address.city}</td>
                                <td className="py-2 px-3 text-sm">{user.company.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;