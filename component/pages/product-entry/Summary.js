import React from 'react'
import { withStyles, TextField } from '@material-ui/core';

const style = {}

class Summary extends React.Component{
    render (){
        return (
            <div>
                <TextField 
                    disabled={true}
                    value="Something" />
            </div>
        )
    }
}

export default withStyles(style)(Summary)