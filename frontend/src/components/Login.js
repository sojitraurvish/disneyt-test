import React from 'react'
import styled from "styled-components"

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>

          <SignUp>GET ALL THERE</SignUp>

          <Description>
          Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").
          </Description>

          <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>

        <BgImage/>
      </Content>
    </Container>
  )
}

export default Login


const Container=styled.section`
  overflow: hidden;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`


const Content=styled.div`
  /* border:2px solid yellow; */
  /* margin-bottom: 10vw; */
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center ;
  flex-direction: column;
  padding: 80px 40px;
  /* height: 100%; */
`

const BgImage=styled.div`
  height: 100%;
  width: 100%;
  /* background-position: top; */
  /* background-image: url("/images/login-background.jpg"); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  z-index: -1;

  /* background-position: top; */
`

const CTA=styled.div`
  /* border:2px solid white; */
  margin-bottom: 2vw;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0%;
  width: 100%;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2;
`

const CTALogoOne=styled.img`
  /* border:2px solid yellow; */
  /* max-width: 600px; */
  width: 100%;
  margin-bottom: 12px;
  /* min-height: 1px; */
  display: block;
`

const SignUp=styled.a`
  font-weight: bold;
  color:white;
  background-color: #0063e5;
  margin-bottom: 12px;
  width:100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border:1px solid transparent;
  border-radius: 4px;

  &:hover{
    background-color: #0483ee;
  }
`

const Description=styled.p`
  color:hsla(0,0%,95.3%);
  font-size:11px;
  margin:0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
` 

const CTALogoTwo=styled.img`
  /* max-width: 600px; */
  width:100%;
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 20px;
`