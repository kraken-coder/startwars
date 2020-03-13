import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

//  Context and friends
import AppContext from './AppContext'
import AppReducers from './AppReducers'
import { GET_PEOPLE, GET_NEXT, SET_LOADING, CHAR_LOADING, FILTER } from '../TYPES'

const AppState = props => {
  const initialState = {
    people: [],
    loading: true,
    character: [],
    charLoading: true,
    filterString: '',
  }
  //  destructuring data
  const [state, dispatch] = useReducer(AppReducers, initialState)
  const { people, loading, character, charLoading, filterString } = state
  const { children } = props
  //  Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING })
  const load = () => dispatch({ type: CHAR_LOADING })
  // Get people

  useEffect(() => {
    function getPeople(
      progress,
      url = 'https://swapi.co/api/people',
      characters = [],
    ) {
      return new Promise((resolve, reject) =>
        fetch(url)
          .then(response => {
            response
              .json()
              .then(data => {
                characters = characters.concat(data.results)

                if (data.next) {
                  progress && progress(characters)
                  getPeople(progress, data.next, characters)
                    .then(resolve)
                    .catch(reject)
                } else {
                  resolve(characters)
                }
              })
              .catch(reject)
          })
          .catch(reject),
      )
    }

    getPeople()
      .then(characters => {
        // all characters have been loaded
        dispatch({
          type: GET_PEOPLE,
          payload: characters,
        })
        setLoading()
      })
      .catch(console.error)
  }, [])

  const getSingleCharacter = async url => {
    const res = await axios.get(url)
    const { data } = res
    dispatch({
      type: GET_NEXT,
      payload: data,
    })
    load()
  }

  //  set filter

  const setFilterString = string => {
    dispatch({
      type: FILTER,
      payload: string,
    })
  }
  return (
    <AppContext.Provider
      value={{
        people,
        loading,
        getSingleCharacter,
        setFilterString,
        character,
        charLoading,
        filterString,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppState
