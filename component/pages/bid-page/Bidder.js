import React from 'react'
import { withStyles, Grid, Paper, Typography, Button, Card, CardMedia, CardContent, withTheme, CardActions, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import { mapProps } from 'recompose';

const styles = theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit
    },
    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingTop: theme.spacing.unit,

    },
})

class Bidder extends React.Component {
    render() {
        const { classes, theme } = this.props
        return (
            <Card className={classes.card}>
                <div className={classes.header}>
                    <Typography variant="subheading">Bidder List</Typography>
                </div>
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Pos</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Bid</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.bidders.map((bidder,pos) => {
                                    return (
                                        <TableRow>
                                            <TableCell>{pos+1}</TableCell>
                                            <TableCell>{bidder.name}</TableCell>
                                            <TableCell>{bidder.bid}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </TableBody>
                    </Table>
                </CardContent>

            </Card>
        )
    }
}

Bidder.defaultProps = {
    bidders: [
        { name: 'John', bid: 1500000 },
        { name: 'Edward', bid: 1455000 },
        { name: 'Tony', bid: 1300000 },
        { name: 'Macko', bid: 1200000 },
    ]
}

export default withStyles(styles, withTheme(true))(Bidder)