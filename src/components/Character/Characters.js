import React, { useContext } from 'react'

import Styled from 'styled-components'
import CharacterItem from './CharacterItem'
import Lazy from '../Skelaton/Skelaton'
import AppContext from '../../state/Context/AppContext'

const Characters = () => {
  const state = useContext(AppContext)
  const { people, loading, filterString } = state
  const filtered = people.filter(({ name }) => {
    const nameString = name.toLowerCase()

    return nameString.includes(filterString)
  })
  if (loading) {
    return (
      <div>
        <Lazy />
        <Lazy />
        <Lazy />
        <Lazy />
        <Lazy />
      </div>
    )
  }

  return (
    <div>
      <Grid>
        {filtered.map((person, index) => (
          <CharacterItem details={person} index={index} key={person.name} />
        ))}
      </Grid>
    </div>
  )
}

const Grid = Styled.div`
display: grid;

@media (max-width: 450px) {
  grid-template-columns: 1fr;
  grid-gap: 20px;
}
@media (min-width: 450px) {
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;

}

`
export default Characters
