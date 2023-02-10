import { useState } from "react";
import axios from "axios";

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
        <div>
            <h1>Yodlr Registration Portal</h1>
            {message ? <p>{message}</p> : null}
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    First name:
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        id="firstName"
                        onChange={handleChange}>
                    </input>                    
                </label>
                <label htmlFor="lastName">
                    Last name:
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        id="lastName"
                        onChange={handleChange}>
                    </input>
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        id="email"
                        onChange={handleChange}>
                    </input>
                </label>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}