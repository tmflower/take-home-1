import { useState } from "react";
import axios from "axios";
import { Box, Stack, FormControl, Typography, TextField, InputLabel, Button } from "@mui/material";

export function Signup({ setUserAdded }) {
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const { firstName, lastName, email } = formData;

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({...formData, [name]: value}));
    };

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        try { 
            await axios.post('http://localhost:3001/users', { firstName, lastName, email });
            setMessage(`Welcome to Yodlr, ${firstName}!`);
            setUserAdded(true);
        }
        catch(err) {
            console.error(err);
        }
    }
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant="h2" sx={{margin: '6rem'}}>Yodlr Registration Portal</Typography>
            {message ? <Typography variant="h3" sx={{color: 'chocolate'}}>{message}</Typography> : null}            
                <form onSubmit={handleSubmit}>
                    <FormControl sx={{ width: '25ch', m: 2 }}>
                    <Stack spacing={2}>
                    <label htmlFor="firstName">
                        First name:  
                        <TextField 
                            type="text"
                            name="firstName"
                            value={firstName}
                            id="firstName"
                            onChange={handleChange}>
                        </TextField>                                          
                    </label>
                    <label htmlFor="lastName">
                        Last name:
                        <TextField
                            type="text"
                            name="lastName"
                            value={lastName}
                            id="lastName"
                            onChange={handleChange}>
                        </TextField>
                    </label>
                    <label htmlFor="email">
                        Email:
                        <TextField
                            type="email"
                            name="email"
                            value={email}
                            id="email"
                            onChange={handleChange}>
                        </TextField>
                    </label>
                <Button type="submit" variant="contained" sx={{margin: '2rem', backgroundColor: "chocolate"}}>Submit</Button>
                </Stack>
                </FormControl>
            </form>            
        </Box>
    )
}