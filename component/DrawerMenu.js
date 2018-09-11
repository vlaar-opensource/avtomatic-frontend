
import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import ListingIcon from '@material-ui/icons/ListOutlined'
import SettingIcon from '@material-ui/icons/Settings'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import BidIcon from '@material-ui/icons/GavelRounded'
import { Divider } from '@material-ui/core';

export class MainMenu extends React.Component {

    gotoDashboard = ()=>{
        Router.push('/dashboard')
    }

    gotoListing = ()=>{
        Router.push('/listing')
    }

    gotoMyBidding= ()=>{
        Router.push('/my-bidding')
    }

    gotoSetting = ()=>{
        Router.push('/settings')
    }
    
    render(){
        return (
            <div>
              <ListItem button onClick={this.gotoDashboard}>
                  <ListItemIcon>
                      <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dasbor" />
              </ListItem>
              <ListItem button onClick={this.gotoListing}>
                <ListItemIcon>
                  <ListingIcon />
                </ListItemIcon>
                <ListItemText primary="Listing" />
              </ListItem>
              <ListItem button onClick={this.gotoMyBidding}>
                <ListItemIcon>
                  <BidIcon />
                </ListItemIcon>
                <ListItemText primary="Lelang Diikuti" />
              </ListItem>
              <Divider/>
              <ListItem button onClick={this.gotoSetting}>
                <ListItemIcon>
                  <SettingIcon/>
                </ListItemIcon>
                <ListItemText primary="Pengaturan" />
              </ListItem>
            </div>
          );
    }
} 

export const otherMailFolderListItems = (
  <div>
  </div>
);