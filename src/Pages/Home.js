import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Items from "../Elements/Items";
import AdminMenu from "../Elements/AdminMenu";
import Orders from "../Elements/Orders";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '0 2%'
    },

}));

const Home = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="lg">
        <Grid container spacing={1}>
            <Grid container item  xs={12} spacing={3}>
                <Paper className={classes.paper}><Items/></Paper>
                <Paper className={classes.paper}><Orders/></Paper>
                <Paper className={classes.paper}><AdminMenu/></Paper>
            </Grid>
        </Grid>
        </Container>
    );
};

export default Home;