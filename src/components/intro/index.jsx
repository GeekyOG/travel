import React from 'react'
import {Container, Heading, Text, Button, Left} from './style/style'

function Intro() {
  return (
    <Container >
      <div className='lg:flex justify-between md:px-[20px] lg:px-[100px]' style={{width: "100%"}} >
        <Left>
          <Heading>
            Read from <br className='md:hidden block'/>travelers and<br className='md:block hidden'/> hear their experiences
          </Heading>
        </Left>
        <Left>
          <Text>
          Weekly post from travelers and guides<br/> on everything lifestyles, foods, tourism and histories
          </Text>
          <Button>
            + Add New Article   
          </Button>
        </Left>
      </div>
        
    </Container>
  )
}






export default Intro