import styled from 'styled-components';


export const Container = styled.div`
padding: 20px  0px 30px 0px !important;
display: flex;
align-items: center;
@media (max-width: 1200px) {
    overflow: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

  }
  @media (max-width: 700px) {
    padding: 0 0px;
  }

  

`

export const Category = styled.button`
background-color: #EEEEEE;
margin-right: 20px;
border: none;
padding: 15px 30px;
border-radius: 15px;
display: inline-flex;
:hover{
    cursor: pointer;
  }
`


export const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    @media (max-width: 1300px) {

      font-size: 0.9rem;
    }
`