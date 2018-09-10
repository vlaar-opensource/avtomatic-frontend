import React from 'react'
import { Grid, TextField, FormGroup, FormControlLabel, Switch, withStyles } from '@material-ui/core';

const styles = {

}
class Timing extends React.Component{
    state = {
        showImmediately: true
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.checked
        })
    }
    render (){
        return (
            <Grid>
                <FormGroup>
                    <FormControlLabel 
                        control={
                            <Switch 
                                checked={this.state.showImmediately}
                                onChange={this.handleChange('showImmediately')}
                                value="changeImmediately"
                                />
                        }
                        label="Tayangkan Sekarang"
                        />
                    
                </FormGroup>
                <FormGroup>
                    <TextField
                        label="Tayangkan Mulai"
                    />
                </FormGroup>
                <FormGroup>
                <TextField
                    label="Mulai Priode Lelang"
                />
                </FormGroup>

                <FormGroup>
                <TextField
                    label="Akhir Periode Lelang"
                />
                </FormGroup>

                
            </Grid>
        )
    }
}

export default withStyles(styles)(Timing)