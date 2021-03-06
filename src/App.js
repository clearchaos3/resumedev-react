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
                fetch('https://api.github.com/users/clearchaos3/repos')
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
            <div className="search">
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
            </div>
            <div className="resume">
                <Paper className="resumePaper">
                    <div className="name">{name}</div>
                    <div className="location">{location}</div>
                    <h3>Projects:</h3>
                    <RepoList repos={repos} />
                </Paper>
            </div>
        </div>
    );
}

export default App;
