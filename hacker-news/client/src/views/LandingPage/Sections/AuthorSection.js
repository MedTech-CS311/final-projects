import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import {  ListItem } from "@material-ui/core";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import storyService from "services/story.service";

const useStyles = makeStyles(styles);

export default function AuthorSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [authors, setAuthors] = useState([]);
  

  const getAuthors = async () => {
    const { data } = await storyService.getTopTenStories().then(data => {return data})
    const authors = data;
    setAuthors(authors);
    console.log(authors);
  };

  useEffect(() => {
    getAuthors();
  }, []);

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Top 10</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <List sx={{ width: '100%', }}>
              
              {authors.map((item) => (
                
                  <div key={item.id} 
                      style={{              //an Author block's style
                        border:'lightgray',borderWidth:'thin',borderStyle:'inset',borderRadius: '10px',marginBottom: '5px'
                          }} 
                  className={classes.container}>
                  <GridContainer>
                    <GridItem >
                    <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.by.id} src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body1"
                      color="limegreen"
                      fontSize="25px"
                    >
                      {item.by.id}
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
                        <span style={{color :'#019800'}}></span> {item.by.about}
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
  
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
