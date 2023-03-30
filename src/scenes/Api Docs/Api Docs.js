import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Introduction from '../../scenes/Api Docs/Introduction'
import Response from '../../scenes/Api Docs/Response'

import './ApiDocs.scss';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit', position: 'inherit', backgroundColor: 'black' },
  link: {
    textDecoration: 'none',

    color: 'blue'
  }
}))

function ApiDocs() {
  const classes = useStyles();
  return (

    <Router>
      <div style={{ display: 'flex', position: 'relative' }}>
        <Drawer
          style={{ width: '230px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >

          <List>
            <ListItem><h5 class="nav__logo-text">PURCHASING API</h5>
            </ListItem>

            <Link to="/introduction" className={classes.link}>
              <ListItem>
                <a class="nav__link">
                  <span class="nav__logo-text">Introduction</span>
                </a>
              </ListItem>
            </Link>
            <Link to="/response" className={classes.link}>
              <ListItem>

                <a class="nav__link">

                  <span class="nav__logo-text">Sub Menu 1 </span>
                </a>
              </ListItem>
            </Link>
            <Link to="/orders" className={classes.link}>
              <ListItem>
                <a class="nav__link">

                  <span class="nav__logo-text">Sub Menu 2</span>
                </a>
              </ListItem>
            </Link>
            <Link to="/users" className={classes.link}>
              <ListItem>
                <a class="nav__link">

                  <span class="nav__logo-text">Sub Menu 3</span>
                </a>
              </ListItem>
            </Link>

            {/* <Link to="/introduction" className={classes.link}>
              <ListItem>
                <a class="nav__link">

                  <span class="nav__logo-text">Portfolio</span>
                </a>
              </ListItem>
            </Link> */}
            {/* <Link to="/introduction" className={classes.link}>
              <ListItem>
                <a class="nav__link">

                  <span class="nav__logo-text">Changelog</span>
                </a>
              </ListItem>
            </Link> */}

          </List>


        </Drawer>
        <Switch>
          <Route path="/introduction"><Introduction /></Route>
          <Route path="/response"><Response /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default ApiDocs;
