import styled from 'styled-components';

export const Container = styled.div`
height: 358px;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 700px) {
    display: block;
    height: auto;
    padding: 50px 20px;
  }
`
export const Heading = styled.h1`
font-size: 40px;
text-align: left;
color: #000000;
font-weight: 900;
line-height: 50px

`
export const Text = styled.p`
font-size: 18px;
text-align: left;
color: #000000;
font-weight: 300;
text-shadow: 0 3px 6px #00000087 ;
line-height:25px;
@media (max-width: 700px) {
 margin-top:20px;
 font-weight: 400;
}
`

export const Button = styled.button`
background-color: #1A76D2;
font-size: 16px;
border-radius: 20px;
padding: 10px 25px;
color: #FFFFFF;
font-weight: 600;
margin-top: 25px;
border: none;

@media (max-width: 765px){
  font-size:18px;
  padding: 15px 50px;
  border-radius:25px;
}
`
export const Left = styled.div`

`

export const Right = styled.div`

`