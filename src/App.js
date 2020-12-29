import './App.css';
import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import NavBar from './NavBar';
import RepoList from './RepoList';

function App() {
    const [name, setName] = useState([]);
    const [location, setLocation] = useState([]);
    const [userInput, setUserInput] = useState([]);
    const [repos, setRepos] = useState([]);

    const setUserData = ({ name, location }) => {
        setName(name);
        setLocation(location);
    };

    useEffect(() => {
        fetch('https://api.github.com/users/clearchaos3')
            .then((res) => res.json())
            .then((data) => {
                setUserData(data);
            })
            .then(
                fetch(`https://api.github.com/users/clearchaos3/repos`)
                    .then((res) => res.json())
                    .then((data) => {
                        setRepos(data);
                    })
            );
    }, []);

    const handleSearch = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userInput}`)
            .then((res) => res.json())
            .then((data) => {
                setUserData(data);
            })
            .then(
                fetch(`https://api.github.com/users/${userInput}/repos`)
                    .then((res) => res.json())
                    .then((data) => {
                        setRepos(data);
                    })
            );
    };

    return (
        <div className="App">
            <NavBar />
            <form
                className="search"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    label="GitHub Username"
                    variant="outlined"
                    onChange={handleSearch}
                />
                <Button variant="contained" color="primary" type="submit">
                    Create My Resume
                </Button>
            </form>
            <Paper>
                <p>{name}</p>
                <p>{location}</p>
                <RepoList repos={repos} />
            </Paper>
        </div>
    );
}

export default App;
