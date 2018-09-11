import React from 'react'
import { withStyles } from '@material-ui/core';

const styles = theme =>{

}

class SettingPage extends React.Component{
    render(){
        return (<div>This is setting page</div>)
    }
}

export default withStyles(styles,{withTheme: true})(SettingPage)