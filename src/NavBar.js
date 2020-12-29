import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const NavBar = () => {
    return(
        <div>
        <AppBar>
            <Toolbar>
                <Typography variant="inherit" color="inherit">
                resume.dev
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;