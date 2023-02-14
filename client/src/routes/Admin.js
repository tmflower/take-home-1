// import { useState } from "react";
import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import theme from "../theme";

export function Admin({users}) {

    return (
        <Box sx={{margin: '8rem'}}>
            <Typography variant="h2" sx={{margin: '6rem 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Admin</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color: theme.typography.primary.color, fontSize: '1.5rem'}}>ID</TableCell>
                        <TableCell sx={{color: theme.typography.primary.color, fontSize: '1.5rem'}}>First name</TableCell>
                        <TableCell sx={{color: theme.typography.primary.color, fontSize: '1.5rem'}}>Last name</TableCell>
                        <TableCell sx={{color: theme.typography.primary.color, fontSize: '1.5rem'}}>Email</TableCell>
                        <TableCell sx={{color: theme.typography.primary.color, fontSize: '1.5rem'}}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>                    
                    {users.map((user, i) =>
                    <TableRow key={i}>                        
                        <TableCell sx={{color: theme.typography.primary.color}}>{user.id}</TableCell>
                        <TableCell sx={{color: theme.typography.primary.color}}>{user.firstName}</TableCell>
                        <TableCell sx={{color: theme.typography.primary.color}}>{user.lastName}</TableCell>
                        <TableCell sx={{color: theme.typography.primary.color}}>{user.email}</TableCell>
                        <TableCell sx={{color: theme.typography.primary.color}}>{user.state}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </Box>
    )
}