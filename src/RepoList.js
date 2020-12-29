import React from 'react'
import Repo from './Repo'

export default function RepoList({ repos }) {
    return (
        repos.map(repo => {
            return <Repo key={repo.id} repo={ repo } />
        })
    )
}
