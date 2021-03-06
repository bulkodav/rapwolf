import Paper from "@material-ui/core/Paper";
import Soon from "../resources/soon.jpg";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

export default function Text() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <img src={Soon} alt="soon" className={classes.songImage}/>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%',
        marginTop: '1em',
        width: '58%',
        webkitBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        mozBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        boxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        backgroundColor: '#282c34',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
        [theme.breakpoints.up('sm')]: {
            height: '70%',
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            padding: 0,
        }
    },
    songImage: {
        [theme.breakpoints.up('md')]: {
            width: '60%',
            webkitBoxShadow: '7px 7px 7px 3px rgba(255,255,255,1)',
            mozBoxShadow: '7px 7px 7px 3px rgba(255,255,255,1)',
            boxShadow: '7px 7px 7px 3px rgba(255,255,255,1)',
        },
        height: 'auto',
        textAlign: 'center',
        borderRadius: '4px',
        width: '100%',
    },
}));