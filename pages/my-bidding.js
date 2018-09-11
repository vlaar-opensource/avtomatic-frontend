import React from 'react'
import { withStyles } from '@material-ui/core';

const styles = theme =>{
    
}
class BiddingPage extends React.Component{
    render(){
        return (
            <div>
                This is bidding page
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(BiddingPage)