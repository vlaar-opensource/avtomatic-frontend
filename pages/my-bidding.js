import React from 'react'
import { withStyles } from '@material-ui/core';
import AppLayout from '../component/AppLayout';

const styles = theme =>{
    
}
class BiddingPage extends React.Component{
    render(){
        return (
            <AppLayout>
                This is bidding page
            </AppLayout>
        )
    }
}

export default withStyles(styles, {withTheme: true})(BiddingPage)