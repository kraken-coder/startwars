import React from 'react'
import Styled from 'styled-components'

// importing @ material UI components

// Importing Components
import Search from '../../components/Search/Search'
import Characters from '../../components/Character/Characters'
// Background image
// import background from '../../assets/background.jpg'

const Home = () => (
  <>
    <Wrapper>
      <Search />
      <Characters />
    </Wrapper>
  </>
)

const Wrapper = Styled.div`
max-width: 1100px;
margin: auto;
overflow: hidden;
padding: 0 2rem;

`

export default Home
