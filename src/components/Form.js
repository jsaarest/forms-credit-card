import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CreditCard from "./CreditCard";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(0,6,6,6)
  },
  container: {
    marginTop: theme.spacing(12),
    paddingTop: theme.spacing(0),

  },
  button: {
    textTransform: 'capitalize',
    margin: theme.spacing(2,1),
    padding: '10px 25px',
    fontSize: '13pt',
    color: theme.palette.common.white
  },
  logotype: {
    textAlign: 'center',
    padding: '40px 0px',
    fontSize: '2em',
    fontWeight: 700,
    letterSpacing:'-2px'
  },
  icon: {
    fontSize: '3.5rem',
    marginBottom: '-16px',
    marginRight: '-12px'
  }


}));

const currentYear = new Date().getFullYear();

const monthsArray = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1;
  return month <= 9 ? '0' + month : month;
});

const yearsArray = Array.from({ length: 9 }, (_x, i) => currentYear + i);

export default function Form() {

  const classes = useStyles();

  const PRODUCT_NAME = 'Checkout';

  const [cardNumber, setCardNumber] = React.useState('');
  const [holderName, setHolderName] = React.useState('');
  const [cvc, setCvc] = React.useState('');
  const [expiryMonth, setExpiryMonth] = React.useState('');
  const [expiryYear, setExpiryYear] = React.useState('');
  const [focus, setFocus] = React.useState('');




  return(
  <Container maxWidth="sm">
    <Typography className={classes.logotype} color="primary">
      <ChevronRightIcon className={classes.icon} color="primary"/>
      {PRODUCT_NAME}
    </Typography>
    <Paper className={classes.container}>
      <CreditCard
        cardNumber={cardNumber}
        holderName={holderName}
        cvc={cvc}
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
      />
      <form className={classes.form} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="Card number"
              label="Card number"
              variant="outlined"
              value={cardNumber}
              fullWidth
              inputProps={{
                maxLength:"19",
                type:"tel",
                name:"cardNumber"
              }}
              onChange={e => setCardNumber(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="Card holder"
              label="Card holder"
              variant="outlined"
              value={holderName}
              fullWidth
              inputProps={{
                type:"text",
                name: "holderName"
              }}
              onChange={e => setHolderName(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <TextField
              select id="Expiration month"
              label="Month"
              variant="outlined"
              fullWidth
              SelectProps={{
                native: true,
                type:"tel"
              }}
              value={expiryMonth}
              onChange={e => setExpiryMonth(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            >
              {monthsArray.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <TextField
              select
              id="Expiration year"
              label="Year"
              variant="outlined"
              value={expiryYear}
              fullWidth
              SelectProps={{
                native: true,
                type:"tel"
              }}
              onChange={e => setExpiryYear(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            >
              {yearsArray.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <TextField
              id="CVV"
              label="CVV"
              variant="outlined"
              value={cvc}
              fullWidth
              inputProps={{
                maxLength:"3"
              }}
              onChange={e => setCvc(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
          </Grid>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            fullWidth
          >Submit
          </Button>
        </Grid>






      </form>
    </Paper>
  </Container>

    )
};


