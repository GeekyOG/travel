import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
@media (max-width: 700px) {
    padding: 0 20px;
  }
`

export const ButtonContainer = styled.div`
color: #000000;
display: flex;
box-shadow: #00000029 0 0px 6px;
padding: 10px 20px;
width: 500px;
border-radius: 35px;


@media (max-width: 700px) {
    padding: 15px 20px;
    width: 100%;
  }
 >form{
  width: 100%;
  >input{
    width: 100%;
  }
 }
 

`

export const Button = styled.div`
font-size: 16px;
border-radius: 15px;
padding: 10px 15px;
font-weight: 600;
margin-top: 25px;
border: none;
`
export const Left = styled.div`
@media (max-width: 700px) {
    width: 100%;
  }
`

export const Right = styled.div`
@media (max-width: 800px) {
    display: none;
  }

`