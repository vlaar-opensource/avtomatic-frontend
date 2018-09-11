import React from 'react'
import Router from 'next/router'
import { withStyles, Grid, Card, CardContent, Typography, CardActionArea, Button, CardActions } from '@material-ui/core';
import AppLayout from '../component/AppLayout';

const styles = (theme) => {

}

class DashboardPage extends React.Component {
    gotoBiddingRoom = number => {
        Router.push('/bidding-room/' + number)
    }
    render() {
        return (<AppLayout>
            <Grid container direction="row">
                <Grid>
                    {this.props.bidRooms.map(bidRoom => {
                        return (
                            <Card>
                                <CardContent>
                                    <Typography variant="title">This is a bid</Typography>
                                    <Typography variant="caption">This is a description</Typography>
                                </CardContent>
                                <CardActionArea>
                                    <CardActions value={bidRoom.number} onClick={() => this.gotoBiddingRoom(bidRoom.number)} >
                                        <Typography variant="button">View</Typography>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </Grid>
            </Grid>

        </AppLayout>)
    }
}

DashboardPage.defaultProps = {
    bidRooms: [
        { name: 'a bid', description: 'a description', number: 247 }
    ]
}

export default withStyles(styles, { withTheme: true })(DashboardPage)