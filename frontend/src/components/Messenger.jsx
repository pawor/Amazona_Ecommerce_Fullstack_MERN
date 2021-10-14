import { AppBar, Toobar, makeStyles } from '@material-ui/core'
import React from 'react';
import Login from './account/Login';

const useStyles = makeStyles({
    loginHeader:{
        height:200,
        background:'#00bfa5',
        boxShadow:'none',
    }
})
const Messenger = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar  className={classes.loginHeader}>
                <Toobar></Toobar>
            </AppBar>
            <Login/>
        </React.Fragment>
    )
}
export default Messenger;