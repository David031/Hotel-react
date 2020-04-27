import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bottomBar: {
        width: '100%',
        background: '#FFFFFF',
        color: 'black',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    footer: {
        width: '100%',
        height: 64,
        background: '#FFFFFF',
        color: '#5F6F7B',
        paddingTop: 20,
    },
    divider: {
        width: '100%',
    },
}));
export default function BotomBar() {
    const classes = useStyles();
    return (
        <Grid container className={classes.bottomBar} >
            <Container className={classes.footer}>
                <Typography variant='subtitle2' >
                    Copyright © 2020 CHW - TF Admin. All rights reserved.
            </Typography>
            </Container>
        </Grid>
    );
}