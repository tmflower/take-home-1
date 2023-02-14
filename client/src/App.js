import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./routes/Home";
import { Signup } from "./routes/Signup";
import { Admin } from "./routes/Admin";
import { useState, useEffect } from "react";
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);
  const [userAdded, setUserAdded] = useState(false);
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela round',
        'sans-serif',
      ].join(','),
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: 'chocolate'
          }
        }
      }
    }
  });

  useEffect(() => {
    async function getUsers() {
      const usersList = await axios.get("http://localhost:3001/users");
      setUsers(usersList.data);
    }
    getUsers();
  }, [userAdded]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup setUserAdded={setUserAdded}/>}></Route>
          <Route path="/admin" element={<Admin users={users}/>}></Route>
        </Routes>
      </ThemeProvider>
    </div>

  );
}

export default App;
