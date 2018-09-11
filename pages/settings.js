import React from 'react'
import { withStyles } from '@material-ui/core';
import AppLayout from '../component/AppLayout';

const styles = theme =>{

}

class SettingPage extends React.Component{
    render(){
        return (<AppLayout>This is setting page</AppLayout>)
    }
}

export default withStyles(styles,{withTheme: true})(SettingPage)