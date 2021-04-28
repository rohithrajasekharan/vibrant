import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from './Button';
const useStyles = makeStyles(theme => ({
  box: {
    padding: 24,
    maxWidth: "320px",
    minHeight: 350,
    height: "auto",
    marginBottom: "52px !important",
    border: "1px solid #ffffff",
    WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
    borderRadius: 12,
    "@media only screen and (max-width: 600px)": {
      width: "90%",
    }
  },
  icon: {
    WebkitBoxShadow: "10px 10px 11px 8px rgba(136,136,136,0.14)",
    boxShadow: "10px 10px 11px 8px rgba(136,136,136,0.14)",
    borderRadius: "50%",
    padding: 5,
    height: 50,
    width: 55,
    marginRight: 24
  }
}))
const Cards = (props) => {
  const handleClassName = (index) => {
    switch (index) {
      case 0:
        return 'blue-neon'
        break;
      case 1:
        return 'green-neon'
        break;
      case 2:
        return 'pink-neon'
        break;
      case 3:
        return 'yellow-neon'
        break;
      case 4:
        return 'violet-neon'
        break;
      default:
        return 'black-neon'
    }
  }
  const classes = useStyles();
  return (
    <div>
      <GridContainer style={{ justifyContent: "space-evenly", maxWidth: 1300 }}>
        {props.data.map((instance, index) => {

          return (
            <div id={instance.color ? instance.color : 'white'} className={classes.box} key={index} style={{ margin: "32px" }}>
              {instance.Icon ? <div className={classes.icon}><img style={{ margin: "0 auto", width: "inherit", height: "inherit" }} src={instance.Icon[0].url} /></div> : null}
              <GridItem><br />
                <Typography variant="h6" style={{ maxWidth: 500, fontSize: instance.titleSize }} >
                  {instance.Title ? <div id={instance.titleColor} style={{ fontFamily: "Georgia", fontWeight: "bold" }}>
                    {instance.Title}</div> : null}
                </Typography><br />
                <Divider id={instance.buttonColor} /><br />
                {instance.Content ? <Typography id={instance.textColor} variant="h6" style={{ fontSize: instance.textSize, width: "fit-content" }}>
                  {instance.Content}
                </Typography> : null}<br />
                <Link to={{ pathname: "/services", state: { ref: instance.ref } }} style={{ textDecoration: "none" }}><Button id={instance.buttonColor}>Learn More</Button></Link>
              </GridItem></div>
          )
        })}
      </GridContainer>
    </div>
  );
};

export default Cards;