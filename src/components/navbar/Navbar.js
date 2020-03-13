import React from 'react'

//  importing mateerual UI components
import Appbar from '@material-ui/core/Appbar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//  Importing Supporting Components
import { makeStyles } from '@material-ui/styles'
import styles from './NavbarStyles'

const useStyles = makeStyles(styles)

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Appbar>
        <Toolbar>
          <Typography variant="h3" component="div">
            Star Wars
          </Typography>
        </Toolbar>
      </Appbar>
    </div>
  )
}

export default Navbar
