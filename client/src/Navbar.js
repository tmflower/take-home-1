import { NavLink } from "react-router-dom";
import { Home } from "./routes/Home";
import { Signup } from "./routes/Signup";
import { Admin } from "./routes/Admin";
import { Box, AppBar, Toolbar } from "@mui/material";

export function Navbar() {
    return (
        <nav>
            <Box>
                <AppBar>
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <NavLink to="/" element={<Home />} className="link">Home</NavLink>
                        <NavLink to="/signup" element={<Signup />}>Signup</NavLink>
                        <NavLink to="/admin" element={<Admin />} data-testid="adminLink">Admin</NavLink>
                    </Toolbar>
                </AppBar>
            </Box>

        </nav>
    )
}