import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export function Home() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '6rem'}}>
            <Typography variant="h1">Welcome to Yodlr!</Typography>
            <Typography variant="h3">Who are you?</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', }}>                    
                <NavLink to="/signup" className="link">
                    <Button variant="contained" sx={{margin: '2rem', backgroundColor: "chocolate"}}>User</Button>
                </NavLink>                
                <NavLink to="/admin">
                    <Button variant="contained" sx={{margin: '2rem', backgroundColor: "chocolate"}}>Admin</Button>
                </NavLink>
                
            </Box>
        </Box>
    )
}