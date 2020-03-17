/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Styled from 'styled-components'
//  importing material Ui components import Card from '@material-ui/core/Card'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Lazy from '../Skelaton/Skelaton'

//  importing context and friends
import AppContext from '../../state/Context/AppContext'

const Character = ({
  match: {
    params: { peopleid },
  },
}) => {
  const state = useContext(AppContext)
  const { getSingleCharacter, character, charLoading } = state
  // eslint-disable-next-line radix
  const id = parseInt(peopleid)
  console.log(id + 1)

  //  Get single Character based om the index
  useEffect(() => {
    getSingleCharacter(`https://swapi.co/api/people/${id + 1}`)
  }, [])

  //  go back to the home page
  const history = useHistory()
  const handleClick = () => {
    history.push('/people')
  }
  return (
    <Wrapper>
      {!charLoading ? (
        <Card>
          <CardHeader title={`${character.name} Profile`} />
          <CardContent>
            <div>
              <p>Name: {character.name}</p>
              <p>Birth Year: {character.birth_year}</p>
              <p>Skin Color: {character.skin_color}</p>
              <p>Gender: {character.gender}</p>
              <p>Eyes Color: {character.eyes_color}</p>
            </div>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained" onClick={handleClick}>
              {' '}
              Go back
            </Button>
          </CardActions>
        </Card>
      ) : (
        <div>
          <Lazy />
          <Lazy />
          <Lazy />
          <Lazy />
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = Styled.div`
margin: 100px auto;
max-width: 90%;
overflow: hidden;  

`
export default Character
