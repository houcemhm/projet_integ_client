import React from 'react'
import Slider from "react-slick";
import { useState, useEffect, useRef } from 'react';
import "./slick.css";
import "./slick-theme.css";
import data from '../../data/data.json';
import HikeCard from '../Card/index';
import useFetch from "../../hooks/useFetch.js";
import { Box, Container, styled, Typography } from "@mui/material";
import axios from 'axios';
const SimpleSlider = ({ initialSlide = 0 }) => {
  const [hasSetPosition, setHasSetPosition] = useState(false);
  const [hikes,setHikes]=useState([]);

  const slider = useRef();
 
  const {data,error,loading}=useFetch("http://localhost:8880/randonnes/rando/","GET")

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
    <Container>
        <Typography
          sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
        >
          nos ordonnées
        </Typography>
        <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>

Tout ce que vous devez savoir lorsque vous cherchez une randonnée !      </Typography>


    <Slider ref={slider} {...settings}>
      {data.map((hike) =><HikeCard  hike={hike}/>)}
    </Slider>
    </Container>
    </Box>
  )
}

export default SimpleSlider;
