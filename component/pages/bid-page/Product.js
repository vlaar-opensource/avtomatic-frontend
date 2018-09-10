import React from 'react'
import { withStyles, Grid, Paper, Typography, Button, Card, CardMedia, CardContent, withTheme, CardActions, Table, TableBody, TableRow, TableCell } from '@material-ui/core';

const styles = theme => ({
    card: {
        display: 'flex',
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        width: 151,
        height: 151,
    },
})
class Product extends React.Component{
    render(){
        const { classes, theme } = this.props
        return (<Card className={classes.card}>
            <CardMedia
                component="img"
                className={classes.cover}
                image="http://localhost:3000/static/img/rare-sneaker.png" />
            <div className={classes.details}>
                <CardContent>
                    <Typography variant="headline">The Stuff</Typography>
                    <Typography variant="subheading">Description of the stuff</Typography>
                </CardContent>
            </div>
        </Card>)
    }
}

export default withStyles(styles)(Product)