/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

//  importing material UI core compoents
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardAction from '@material-ui/core/CardActions'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'

//  material Icons
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import FlightIcon from '@material-ui/icons/Flight'
//  importing supporting Core library
import { makeStyles } from '@material-ui/core/styles'
import styles from './cardStyles'

const useStyles = makeStyles(styles)

const CharacterItem = ({ index, details: { name, vehicles, starships, films } }) => {
  const classes = useStyles()

  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader title={name} />
      <CardContent>
        <div className={classes.chipContainer}>
          <Chip
            className={classes.chip}
            icon={<DriveEtaIcon />}
            color="secondary"
            label={vehicles ? `${vehicles.length} vehicles` : null}
          />
          <Chip
            className={classes.chip}
            icon={<DriveEtaIcon />}
            color="secondary"
            label={films ? `${films.length} films` : null}
          />
          <Chip
            className={classes.chip}
            icon={<FlightIcon />}
            color="secondary"
            label={starships ? `${starships.length} starships` : null}
          />
        </div>
      </CardContent>
      <Divider light className={classes.divider} />
      <CardAction>
        <Link to={`/people/${index}`}>
          <Button color="primary" variant="contained">
            {' '}
            View Profile
          </Button>
        </Link>
      </CardAction>
    </Card>
  )
}

export default CharacterItem
