import { Link } from "react-router-dom"
import UserTable from "../components/UserTable"

const HomePage = () => {
    return (
        <div>
            <div className="flex justify-between p-4">
                <h1 className="text-xl font-bold">Users</h1>
                <Link to="/add" className="bg-blue-500 text-white px-3 py-1 rounded"> Add user </Link>
            </div>
            <div>
                <UserTable/>
            </div>
        </div>
    )
}

export default HomePage;