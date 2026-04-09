import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const { addUser } = useUsers();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        city: "",
        company: ""
    });

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        addUser({
            id: Date.now(),
            name: user.name,
            email: user.email,
            address: { city: user.city },
            company: { name: user.company }
        });
        console.log(user);
        navigate("/")
    }
    return(
        <div className="text-left px-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="text-sm"> Name </label>
                    <input type = "text" className="w-full border px-2 py-1" onChange = { (e) => setUser({...user, name: e.target.value}) } />
                </div>
                <div className="mb-3">
                    <label className="text-sm"> Email </label>
                    <input type = "email" className="w-full border px-2 py-1" onChange = { (e) => setUser({...user, email: e.target.value}) } />
                </div>
                <div className="mb-3">
                    <label className="text-sm"> City </label>
                    <input type = "text" className="w-full border px-2 py-1" onChange = { (e) => setUser({...user, city: e.target.value}) } />
                </div>
                <div className="mb-3">
                    <label className="text-sm"> Company </label>
                    <input type = "text" className="w-full border px-2 py-1" onChange = { (e) => setUser({...user, company: e.target.value}) } />
                </div>
                <div className="mb-3">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded"> Add User </button>
                </div>
            </form>
        </div>
    )
}
export default UserForm;