import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//  theme MUI
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

// Importing State manager
import AppState from './state/Context/AppState'

//  importing App level components
import Navbar from './components/navbar/Navbar'

// Importing Components for Routes
import Home from './views/home/Home'
import Character from './components/Character/Character'
import './App.css'

// creating a MUI theme for material UI
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#28a745',
    },
    secondary: {
      main: '#007bff',
    },
    success: {
      main: '#007bff',
    },
  },
})

const App = () => (
  <AppState>
    <MuiThemeProvider theme={theme}>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/people" component={Home} />
          <Route path="/people/:peopleid" component={Character} />
          <Redirect from="/" to="/people" />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </AppState>
)

export default App
