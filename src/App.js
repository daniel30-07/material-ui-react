import React from 'react'
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import Discard from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Checkbox from '@material-ui/core/Checkbox'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'

import 'fontsource-roboto'

const useStyle = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
    border: 10,
    borderRadius: 15,
    color: '#fff',
    padding: '5px 30px',
    marginBottom: 15
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500]
    }
  },
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 10,
      color: '#fff111'
    }
  }
})

function ButtonStyled() {
  const classes = useStyle();
  return <Button
    className={classes.root}>
    Test Styled Button
          </Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<Discard />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'primary checkbox'
          }}
        />
      }
      label='Testing Checkbox'
    />
  )
}

function App() {
  return (
    <Container maxWidth='xs'>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h2'>
              Welcome to MUI
          </Typography>
            <Typography variant='h4'>
              Learn How to Use Material UI
          </Typography>
            <ButtonStyled />
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>
            <TextField
              variant='filled'
              type='email'
              label='email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              //className={classes.margin}
              //id="input-with-icon-textfield"
              label="TextField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <CheckboxExample />
            <ButtonGroup variant='outlined' size='large'>
              <Button
                startIcon={<SaveIcon />}
                onClick={() => alert('Hello')}
                color='primary'>
                Hello World
          </Button>
              <Button
                startIcon={<Discard />}
                onClick={() => alert('Hello')}
                color='secondary'>
                Hello World
          </Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </ThemeProvider>
    </Container>

  );
}

export default App;
