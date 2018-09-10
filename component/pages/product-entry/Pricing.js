import React from 'react'
import { Grid, TextField, withStyles } from '@material-ui/core';

const styles = {

}

class Pricing extends React.Component{
    
    render (){
        const {classes} = this.props
        return (
            <div>
                <Grid>
                    <Grid>
                        <TextField label="Harga Jual Langsung"/>
                    </Grid>
                    <Grid>
                        <TextField label="Harga Mulai Lelang"/>
                    </Grid>
                    <Grid>
                        <TextField label="Kelipatan Lelang"/>
                    </Grid>
                    
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Pricing)