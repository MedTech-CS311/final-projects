import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {  ListItem } from "@material-ui/core";
import { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
//@mui imports
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Grid } from "@material-ui/core";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import data from "../../../assets/dummy_data";
import storyService from "services/story.service";

const useStyles = makeStyles(styles);

export default function StorySection() {
  const classes = useStyles();

  //   Stories = data.data;
  //   console.log(Stories)
  // });
  const [stories, setStories] = useState([]);
 

  const getStories = async () => {
    const { data } = await storyService.getStories().then(data => {return data})
    const stories = data;
    setStories(stories);
    console.log(stories);
  };

  useEffect(() => {
    getStories();
  }, []);

  return (
    <List sx={{ width: '100%', }}>
      <ListItem key="Subheader" cols={5}>
        <ListSubheader style={{background : 'transparent' ,color:'white' ,fontSize:'35px !important'}} sx={{display: 'table',margin: '0 auto'}} component="div"><h3 align="center">News</h3></ListSubheader>
      </ListItem>
      {stories.map((item) => (
        
          <div key={item.id} 
              style={{              //a Story block's style
                border:'lightgray',borderWidth:'thin',borderStyle:'inset',borderRadius: '10px',marginBottom: '5px'
                  }} 
          className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.by.id} src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
            <Typography
              sx={{ display: 'table',margin: '0 auto' }}
              component="span"
              variant="body1"
              color="limegreen"
              fontSize="25px"
            >
              {item.title}
            </Typography>
            
            <Typography
              sx={{ display: 'table',margin: '0 auto'}}
              component="span"
              variant="body1"
              color="darkgoldenrod"
            >
              Score: {item.score} <br></br>
            </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="white"
              >
                <span style={{color :'#019800'}}>By: </span> {item.by.id}
              </Typography>
              <Typography
                sx={{ float:'right' ,display: 'inline' }}
                component="span"
                variant="body2"
                color="white"
              >
              <span style={{color :'#029800'}}>  Karma:</span> {item.by.karma}
              </Typography>
            </React.Fragment>
          }
          
        />
      </ListItem>
            </GridItem>
          </GridContainer>
          
      <Divider variant="inset" component="li" />
        </div>
           
          
          
          
      ))}
    </List>
  );
}