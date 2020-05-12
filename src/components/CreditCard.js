import React from 'react'
import Card from '@material-ui/core/Card';
import {makeStyles} from "@material-ui/styles";
import CardContent from '@material-ui/core/CardContent';
import Chip from '../images/Chip.svg';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({

  creditCard: {
    padding: theme.spacing(2),
    height: '220px',
    width:'70%',
    zIndex: 3,
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor: theme.palette.primary[200],
    //backgroundImage: 'linear-gradient(left, #00c6ff, #0072ff)',
    backgroundImage: `linear-gradient(130deg,${theme.palette.primary[700] + ','+ theme.palette.primary[300]})`,
    position:'relative',
    top:-85,
    borderRadius:'20px',
  },
  wrapper: {
    display: 'flex',
    justifyContent:'space-between',
    marginTop: theme.spacing(2)
  },
  cardNumbers: {
    color: theme.palette.common.white,
    fontSize: '18pt',
    fontFamily: 'Source Code Pro, monospace !important',
    fontWeight: 500,
    marginTop: theme.spacing(4)

  },
  cardHolder: {
    color: theme.palette.common.white,
    textTransform: 'uppercase !important',
    fontSize: '14pt',
    fontFamily: 'Source Code Pro, monospace !important',
    fontWeight: 500,
  },
  label: {
    fontFamily: 'Source Code Pro, monospace !important',
    fontSize: '12pt',
    color: theme.palette.common.white,
    opacity: '70%',
    marginTop: theme.spacing(2)
  }
}));



export default function CreditCard(props) {

  const classes = useStyles();

  const {cardNumber, holderName, cvc, expiryMonth, expiryYear} = props;

  return(
    <Card className={classes.creditCard}>
      <CardContent>
        <img src={Chip} width="50px"/>
        <div className={classes.cardNumbers}>{!cardNumber ? '**** **** **** ****': cardNumber}</div>
        <div className={classes.wrapper}>
          <div>
            <div className={classes.label}>Holder name:</div>
            <div className={classes.cardHolder}>
              {holderName}
            </div>
          </div>
          <div>
            <div className={classes.label}>Expiry:</div>
            <div className={classes.cardHolder}>
              {!expiryMonth ? 'MM' : expiryMonth} / {!expiryYear ? 'YY' : expiryYear.toString().substr(-2)}
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}