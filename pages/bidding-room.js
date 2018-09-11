import React from 'react'
import { withStyles, Grid, Paper, Typography, Button, Card, CardMedia, CardContent, withTheme, CardActions, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import Action from '../component/pages/bid-page/BidAction';
import Product from '../component/pages/bid-page/Product';
import Bidder from '../component/pages/bid-page/Bidder';

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
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 151,
    },
    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

class BidPage extends React.Component {
    render() {
        const { classes, theme } = this.props
        return (
            <div>
                <Grid container direction="row" spacing={16}>
                    <Grid item xs={4}>
                        <Bidder/>
                    </Grid>
                    <Grid item xs={8}>
                        <Product/>
                        <Action/>
                    </Grid>

                </Grid>
            </div>)
    }
}

export default withStyles(styles, withTheme(true))(BidPage)
