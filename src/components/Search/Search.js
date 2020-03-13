import React, { useContext, useState } from 'react'

//  importing material Ui core components
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

//  importing supporting components
import { makeStyles } from '@material-ui/core/styles'
import styles from './searchStyles'

// context and friends
import AppContext from '../../state/Context/AppContext'

const useStyles = makeStyles(styles)

const Search = () => {
  const [filter, setFilter] = useState('')

  // context
  const state = useContext(AppContext)
  const { setFilterString } = state

  const handleChange = e => {
    const { value } = e.target
    setFilter(value)
    setFilterString(filter)
  }

  const classes = useStyles()
  return (
    <div className={classes.paperRoot}>
      <Paper elevation={3} className={classes.paper}>
        <div>
          <TextField
            label="Search Name"
            placeholder="Luke Skywalker"
            className={classes.formInput}
            value={filter}
            onChange={handleChange}
          />
        </div>
      </Paper>
    </div>
  )
}

export default Search
