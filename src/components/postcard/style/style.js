import styled from 'styled-components';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Button from "@mui/material/Button";



export const Container = styled.div`
    padding-right:20px ;
    width: 30%;
    
   

`
export const TrendingCard = styled.div`
width :320px;
padding: 20px 10px;
border-radius: 20px;
margin-top: 20px;
box-shadow: 0 0 6px #00000029;
border: #00000029 solid 1px;
`

export const Heading = styled.h1`
width: 100%;
font-size: 16px;
margin-top: px;  
`
export const PostImage = styled.img`
 border-radius: 20px;
` 
export const PostTag = styled.p`
 font-size: 10px;
 letter-spacing: 2px;
` 

export const SideImage = styled.div`
 position: relative; 
 width: 100px;
 aspect-ratio: 1 / 1;
 border-radius: 20px;

 >img{
    position: relative; 
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 20px;
 }
 
` 

export const PostTime = styled.p`
color: #9E9E9E;
font-size: 10px;
 
` 

export const PostHeading = styled.h1`
font-size: 14px;
font-weight: 900;
` 
export const PostText = styled.p`
font-size: 14px;
color: #757575;
padding-bottom:5px ;
` 

export const TrendPostMiddle = styled(Grid)`
 padding: 5px 0;
` 

export const Name = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #000;
`


export const ReadButton = styled(Button)`
padding: 5px 0;

`