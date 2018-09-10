import React from 'react'
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const styles = {

}

class ProductInfo extends React.Component {
    
    render(){
        const {classes} = this.props

        return (
            <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                className={classes.textField}
                                id="mame" label="Nama Barang" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="description"
                                multiline
                                rows="4"
                                className={classes.textField}
                                label="Informasi Produk" />
                        </Grid>
                    </Grid>
        )
    }
}

export default withStyles(styles)(ProductInfo)

