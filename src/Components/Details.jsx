import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React,{ useEffect, useState}  from "react";
import {Link } from 'react-router-dom';
import {useParams } from 'react-router';
import CustomButton from "./CustomButton";
import useFetch from "../hooks/useFetch";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Details = () => {

  const [hike,setHike]=useState([]);   
  const { id } = useParams();
  console.log(id);
  const {data,error,loading}=useFetch(`http://localhost:8880/randonnes/rando/${id}`,"GET")
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    width:"100%",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  const dateBox = styled(Box)(({ theme }) => ({
    display: "flex",

      flexDirection: "column",
      textAlign: "center",
  
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({

    display: "flex",
    width:"100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "30px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <div className="bgDetails">
    <Navbar />
    <Box sx={{ py: 5 }}>
      <Container style={{
        width:"100%" ,
        backgroundColor:"#FFF",
        borderRadius: "20px",
        padding:"40px"
      }}>
        <CustomBox>
          <ImgContainer >
              <img style={{borderRadius:"20px",width:"100%" }} src={data.image} alt="house"/>
           </ImgContainer>
          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
             {data.titreRandonnee}
            </Typography>
            
            <Typography
              sx={{
                width:"50%",
                fontSize: "16px",
                color: "#000",
                lineHeight: "16px",
              }}
            >
             {data.description}
            </Typography>

<dateBox>
<Typography variant="h5">
Date : </Typography>
<Typography variant="h5">{new Date(data.dateRandonnee).toLocaleDateString()}</Typography></dateBox>
  <Typography variant="h5">Heure debut:</Typography>
  <Typography>{data.dateDebut}</Typography>
  <Typography variant="h5">Heure Fin:</Typography>
  <Typography>{data.dateFin}</Typography>



           
      
          </Box>
        </CustomBox>
        <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>Destination:</LargeText>
            <SmallText>{data.destination}</SmallText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>Prix:</LargeText>
            <SmallText>{data.prixRandonnee}</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to={`/register/${data.titreRandonnee}`}>
             <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
        />
        </Link>
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
    <Footer />
    </div> 
    );
};

export default Details;
