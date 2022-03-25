import React, { useState } from 'react';
import { Typography, Paper, Grid, Button, FormControlLabel, Checkbox } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Web3 from 'web3';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

import classes from './multichain.module.css'

import stores from '../../stores/index.js'
import { getProvider } from '../../utils'

export default function OmniaDashboard({ closeMultichain: closeOmnia }) {

  const [ checked, setChecked ] = useState(false)

  const navigateToOmnia = () => {
    window.open("https://app.omniatech.io", "_blank")
  }

  const handleChange = () => {
    setChecked(!checked)
  }

  const theme = createTheme({
    palette: {
      type: 'dark',
      secondary: {
        main: '#fff'
      }
    },
    typography: {
      fontFamily: [
        'Inter',
        'Arial',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      body1: {
        fontSize: '12px'
      }
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: '32px',
          padding: '9px 16px'
        },
        containedPrimary: {
          backgroundColor: '#fff',
          color: '#000'
        }
      },
      MuiFormControlLabel: {
        root: {
          color: '#fff'
        }
      }
    },
  });

  return (
    <Paper elevation={ 1 } className={ classes.chainContainer } key={ 'multichain' } >
      <ThemeProvider theme={theme}>
        <div className={ classes.topInfo }>
          <img src='/omnia.png' width={ 224 } height={ 126 } className={ classes.avatar } />
          <Typography variant='subtitle1' className={ classes.descriptionText} align='center' >Generate secure and reliable JSON RPC endpoints for your wallet or your DApp.</Typography>
          <Button
            className={ classes.tryButton }
            variant='contained'
            disableElevation
            onClick={ navigateToOmnia }
            color='secondary'
            endIcon={<ArrowForwardIcon />}
          >
            <Typography className={ classes.buttonLabel }>Try out <b>app.omniatech.io</b></Typography>
          </Button>
        </div>
        <div className={ classes.bottomActions }>
          <FormControlLabel
            control={<Checkbox checked={ checked } onChange={handleChange} name="checked" />}
            label="Don't show again"
          />
          <Button
            size='small'
            onClick={ () => { closeOmnia(checked) } }
            endIcon={<CloseIcon />}
          >
            <Typography className={ classes.buttonLabel }>Close</Typography>
          </Button>
        </div>
      </ThemeProvider>
    </Paper>
  )
}
