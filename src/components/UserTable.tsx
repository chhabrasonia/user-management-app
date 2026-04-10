import { useMemo, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import useDebounce from "../context/useDebounce";

const UserTable = () => {
    const {users, loading, error} = useUsers();
    console.log(users);
    // search state
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search);

    // filtered users 
    const filteredUsers = useMemo( () => {
       const text = debouncedSearch?.toLowerCase() || "";
       return users.filter( (user) => {
            return(
                user.name.toLowerCase().includes(text) ||
                user.email.toLowerCase().includes(text) ||
                user.address.city.toLowerCase().includes(text) ||
                user.company.name.toLowerCase().includes(text)
            )
        }
       )
    }, [users, debouncedSearch]);

    //  laoder
    if (loading) return <Loader/>;
    // error
    if (error) return <ErrorMessage message={error} />
    return (
        <div className = "p-4">
            <div className="mb-4 flex justify-end">
                <input 
                    type="text" 
                    value={search}
                    placeholder=" Search by email, name, city, company..."
                    onChange={ (e) => setSearch(e.target.value) }
                    className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none"
                />
            </div>
            <table className="w-full border border-gray-300 shadow">
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
                        filteredUsers.map( (user) => (
                            <tr key={user.id} className="border border-gray-300">
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