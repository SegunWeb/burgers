import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '36ch',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
    }),
);

export default function AlignItemsList({title, ingredient, price, urlImg, delItem}) {
    const classes = useStyles();



    return (
        <List className={classes.root}>


            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={urlImg} />
                </ListItemAvatar>
                <ListItemText
                    primary={ingredient}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {title}
                            </Typography>
                            {price}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <button onClick={delItem}>del</button>
            <Divider variant="inset" component="li" />
        </List>
    );
}
