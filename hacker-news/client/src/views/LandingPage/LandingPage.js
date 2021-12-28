import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import StorySection from "./Sections/StorySection.js";
import AuthorSection from "./Sections/AuthorSection.js";
import WorkSection from "./Sections/WorkSection.js";
import storyService from "services/story.service.js";
import userService from "services/user.service.js";
import NavPills from "components/NavPills/NavPills.js";
import { Archive, Person } from "@material-ui/icons";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  // const user = userService.getProfile();
  // console.log(user);
  
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Hacked News"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/m5.gif").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Hacked News</h1>
              <h4>
                All the Interesting Subjects of the IT world you{"'"}ll find em here ! <br></br>
                If you{"'"}re new to our Site Check this welcoming video !
              </h4>
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div style={{ background : '#02400087' ,boxShadow:" inset 0 0 18px 20px rgb(0 0 0 / 22%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)"}}
       className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills style={{padding :"0 5"}}
                  alignCenter
                  color="success"
                  tabs={[
                    {
                      tabButton: "Stories",
                      tabIcon: Archive,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem >
                            <StorySection />      
                          
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Top Ten Authors",
                      tabIcon: Person,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem >
                          <AuthorSection/>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          {/* 
          <WorkSection /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
