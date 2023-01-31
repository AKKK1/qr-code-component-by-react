import React from 'react'
import styled from 'styled-components'
import img from './images/qr.png'



const Qr = (props) => {
  return (
    <Section>
    <Box>
   <ImageContainer>
    <Img src={img} alt="img" />


   </ImageContainer>


<TextContainer>

  <J2>{props.text}</J2>
<P2>{' Scan the QR code to visit Frontend \n Mentor and take your coding skills to \n the next level'}</P2>

</TextContainer>

    </Box>
    </Section>
  )
}

const Section = styled.div`
background-color:hsl(212, 45%, 89%);
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const Img = styled.img`
  max-width: 100%;
  height: auto;
`
const P2 = styled.h2`
font-family: 'Outfit', sans-serif;
font-weight: 400;
  font-size: 15px;
text-align: center;
 margin: 15px;
 color: hsl(220, 15%, 55%);
`
const J2 = styled.h2`
font-family: 'Outfit', sans-serif;
font-weight: 700;
  font-size: 23px;
text-align: center;
 margin: 15px;
 color: hsl(218, 44%, 22%);
`
const Box = styled.div`
    background-color:hsl(0, 0%, 100%);
    height: 500px;
    width: 300px;
    border-radius: 15px;
`



const ImageContainer = styled.div`
    background-color: blue;
    height: 300px;
    margin: 10px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;

`

const TextContainer = styled.div`
    
    align-items: center;
    justify-content: flex-end;
`
export default Qr