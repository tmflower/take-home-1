import { NavLink } from "react-router-dom";
import { Home } from "./routes/Home";
import { Signup } from "./routes/Signup";
import { Admin } from "./routes/Admin";

export function Navbar() {
    return (
        <nav>
            <NavLink to="/" element={<Home />}>Home</NavLink>
            <NavLink to="/signup" element={<Signup />}>Signup</NavLink>
            <NavLink to="/admin" element={<Admin />}>Admin</NavLink>
        </nav>
    )
}