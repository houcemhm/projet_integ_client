import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { format } from 'date-fns'
const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(1),
      }
  }));

const HikeCard = ({ hike }) => {
    return (
     
        <Card sx={{ maxWidth: 350, position: "relative" }}>  
         <Link  key={hike.idRandonnee}  to={`details/${hike.idRandonnee}`} style={{ textDecoration: 'none' }}>
            <Box sx={{ position: 'relative'}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={hike.image}
                    alt={hike.titreRandonnee}/>
            </Box>

            <CardInfo>
                <Typography variant="h6" gutterBottom component="div">
                    {hike.titreRandonnee}
                </Typography>
                <Typography mb={0} variant="subtitle1" gutterBottom component="div">
                {new Date(hike.dateRandonnee).toLocaleDateString()}
                </Typography>
                <Typography mb={0} variant="subtitle1" gutterBottom component="div">
                {hike.destination}
                </Typography>
            </CardInfo>
       </Link> </Card>
    )
}



export default HikeCard;