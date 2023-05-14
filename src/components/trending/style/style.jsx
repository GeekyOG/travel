import styled from 'styled-components';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Image from 'next/image';



export const Container = styled.div`
    padding-left:20px ;
    width: 30%;

    @media (max-width: 1200px){
    display: none;

  }

`
export const TrendingCard = styled(Card)`
   width :300px;
   padding: 20px;
   border-radius: 20px;
   margin-top: 20px;
   box-shadow: 0 0 6px #00000029;
`

export const Heading = styled.h1`
width: 100%;
font-size: 20px;
margin-top: 20px;  
`
export const PostImage = styled(Image)`
 border-radius: 20px;
` 

export const SideImage = styled.div`
 position: relative; 
 width: 100%;
 aspect-ratio: 1 / 1;
 border-radius: 20px;
 
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
font-size: 12px;
color: #757575;
padding-bottom:5px ;
` 

export const TrendPostMiddle = styled(Grid)`
 padding: 5px 0;
` 

export const PostContainer = styled.div`
height:570px;
overflow-y: scroll;
`