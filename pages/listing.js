import React from 'react'
import Router from 'next/router'
import { withStyles, Paper, Card, CardContent, Typography, Grid, CardActions, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddOutlined'

const styles = (theme) => ({
    card: {
        display: 'flex',
        marginBottom: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        width: '24%'
    }
})

class ListingPage extends React.Component {
    gotoAddListing(){
        Router.push('/create-bid')
    }
    render() {
        const { classes } = this.props

        return (<div>
            <Grid container direction="column">
                <Grid>
                {this.props.listings.map((listing) => {
                    return (
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="headline">{listing.name}</Typography>
                                <Typography variant="caption">{listing.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button>
                                    <Typography variant="button">
                                        View
                                        </Typography>
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })
                }
                </Grid>
                <Grid>
                    <Button variant="fab" onClick={this.gotoAddListing} >
                        <AddIcon/>
                    </Button>
                </Grid>

            </Grid>
        </div>)
    }
}

ListingPage.defaultProps = {
    listings: [
        {
            name: 'Sneaker',
            description: 'This is a sneaker'
        },
        {
            name: 'Sneaker',
            description: 'This is a sneaker'
        },
        {
            name: 'Sneaker',
            description: 'This is a sneaker'
        },
        {
            name: 'Sneaker',
            description: 'This is a sneaker'
        }
    ]
}

export default withStyles(styles, { withTheme: true })(ListingPage)