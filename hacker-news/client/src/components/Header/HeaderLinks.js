/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Add } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import authService from "services/auth.service";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Popover from "@material-ui/core/Popover";
import { useState } from "react";
import { useRef } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import PhoneIcon from '@material-ui/icons/Phone';
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import { Grid } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { TextField } from "@mui/material";
import storyService from "services/story.service";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  
  Transition.displayName = "Transition";

  const [classicModal, setClassicModal] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();

  //input listeners
  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };
  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const create = (e) =>{
    e.preventDefault();
    
    setMessage("");
    setLoading(true);
    console.log(title);
    console.log(description);
    // form.current.validateAll();
    
    if (title && description) {
      storyService.create(title, description).then(
        () => {
          window.location.reload(false);
        },
        (error) => {
          const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
            
            setLoading(false);
            setMessage(resMessage);
          }
        );
      handleClose();
    } else {
      setLoading(false);
    }
  }


  return (
    
    <List className={classes.list}>

<ListItem className={classes.listItem}>
<GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
                <Button
                  color="transparent"
                  target="_blank"
                  className={classes.button}
                  onClick={handleClickOpen}
                >
                  <Add className={classes.icons} /> Create a Post
                </Button>
                <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
                  <DialogTitle>What's your Story</DialogTitle>
                  <form className={classes.form} onSubmit={create} ref={form}>
                  <DialogContent>
                    <DialogContentText>
                      Seems like you've got something interesting 
                    </DialogContentText>
                    <Grid container spacing={5}>
                      <Grid item xs={12}>
                        <CustomInput
                        
                          labelText="Something Cool"
                          id="title"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            onChange: (e) => onChangeTitle(e),
                            type: "text",
                            
                          }}
                        />
                        </Grid>
                    </Grid>
                    <TextField
                      
                      margin="dense"
                      id="description"
                      label="Description"
                      type="text"
                      multiline
                      rows={4}
                      fullWidth
                      color="secondary"
                      variant="standard"
                      inputProps={{
                        onChange: (e) => onChangeDescription(e),
                        type: "text",
                        
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button type="Submit" color="primary" onClick={handleClose} disabled={loading}>Post</Button>
                    <Button outline color="danger" onClick={handleClose} disabled={loading}>Cancel</Button>
                    
                  </DialogActions>
                  
                  </form>
                </Dialog>
              </GridItem>
            </GridContainer>
      </ListItem>


      <ListItem className={classes.listItem}>
        
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/profile" className={classes.dropdownLink}>
              Profile
            </Link>,
            <Link 
            onClick={authService.logout}
              to="/login"
              className={classes.dropdownLink}
            >
              Log-out
            </Link>,
          ]}
        />
      </ListItem>
    
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
