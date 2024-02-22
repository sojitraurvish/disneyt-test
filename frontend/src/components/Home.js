import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSilder from './ImgSilder'
import Viewers from './Viewers'
import Recommends from './Recommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { useDispatch } from 'react-redux'
import { getAllMovies } from '../store/actions/movieActions'

const Home = () => {

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getAllMovies())    
        
    },[])

  return (
    <Container>
        <ImgSilder/>
        <Viewers/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
       
    </Container>
  )
}

export default Home

const Container=styled.div`

    /* border: 2px solid red; */
    margin-top: 72px;
    min-height:100vh;
    overflow:hidden;
    display: block;
    padding: 0 calc(3.5vw + 5px);
    position: relative;

    &:after{
        content: "";
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }

`

