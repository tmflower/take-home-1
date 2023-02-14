import { useState } from "react";
import axios from "axios";
import { Box, FormControl, Typography, TextField, InputLabel, Button } from "@mui/material";

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
            {message ? <p>{message}</p> : null}
            <FormControl>
                <form onSubmit={handleSubmit}>
                    <InputLabel htmlFor="firstName">
                        First name:  
                        <TextField 
                            // variant="standard"
                            type="text"
                            name="firstName"
                            value={firstName}
                            id="firstName"
                            onChange={handleChange}>
                        </TextField>                                          
                    </InputLabel>
                    <InputLabel htmlFor="lastName">
                        Last name:
                        <TextField
                            // variant="standard"
                            type="text"
                            name="lastName"
                            value={lastName}
                            id="lastName"
                            onChange={handleChange}>
                        </TextField>
                    </InputLabel>
                    <InputLabel htmlFor="email">
                        Email:
                        <TextField
                            // variant="standard"
                            type="email"
                            name="email"
                            value={email}
                            id="email"
                            onChange={handleChange}>
                        </TextField>
                    </InputLabel>
                <Button type="submit" variant="contained" sx={{margin: '2rem', backgroundColor: "chocolate"}}>Submit</Button>
                </form>
            </FormControl>
        </Box>
    )
}