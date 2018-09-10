import React from 'react'
import { withStyles } from '@material-ui/core';
import { Grid, Paper, Typography, Button, Card, CardMedia, CardContent, withTheme, CardActions, Table, TableBody, TableRow, TableCell } from '@material-ui/core';

const styles = theme => ({
    card: {
        display: 'flex',
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    actionPart: {
        width: '33%'
    },
    bidButton: {
        width: '33%',
        float: 'right'
    }
})

class BidAction extends React.Component {
    render() {
        const { classes, theme } = this.props
        return (
            <Card className={classes.card}>
                <CardContent className={classes.actionPart}>
                    <Typography>Highest Bid: {this.props.highestBid}</Typography>
                </CardContent>
                <CardContent className={classes.actionPart}>
                    <Typography>your position <strong>{this.props.position}</strong></Typography>
                </CardContent>
                <CardActions  className={classes.bidButton}>
                    <Button color="secondary" variant="outlined">PLACE BID</Button>
                </CardActions>
            </Card>
        )
    }
}

BidAction.defaultProps = {
    highestBid: 1500000,
    position: 8,
    currentBid: 1550000
}

export default withStyles(styles, withTheme(true))(BidAction)