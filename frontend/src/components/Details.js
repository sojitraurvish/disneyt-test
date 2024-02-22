import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import styled from "styled-components"
import { getMovieById } from '../store/actions/movieActions';

const Details = () => {

    const dispatch=useDispatch();
    const {id:movieId}=useParams();
    const {movie:movieDetails,loading,error}=useSelector((state)=>state.movieDetails);

    useEffect(()=>{
        dispatch(getMovieById(movieId))
    },[movieId])

  return (
    <Container>
        <Background>
            <img alt="" src={movieDetails.backgroundImg}/>
        </Background>

        <ImageTitle>
            <img alt="" src={movieDetails.titleImg}/>
        </ImageTitle>
        
        <ContentMeta>
            <Controls>
                <Player>
                    <img src="/images/play-icon-black.png" alt=""/>
                    <span>Play</span>
                </Player>
                <Trailer>
                    <img src="/images/play-icon-white.png" alt=""/>
                    <span>Trailer</span>
                </Trailer>
                <AddList>
                    <span/>
                    <span/>
                </AddList>
                <GroupWatch>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatch>
                
            </Controls>
            <SubTitle>
            {movieDetails.subTitle}
            </SubTitle>
            <Description>
            {movieDetails.description}
            </Description>
        </ContentMeta>
    </Container>
  )
}

export default Details


const Container=styled.div`
    /* border:2px solid yellow; */
    margin-top: 72px;
    min-height: 100vh;
    overflow: hidden;
    display: block;
    padding :0 calc(3.5vw + 5px);
    position: relative;
`
const Background=styled.div`
    /* border:2px solid red; */
    position:absolute;
    inset: 0;
    z-index: -1;
    opacity: 1;
    img{
        /* border:2px solid yellow; */
        object-fit: cover;
        width:100vw;
        min-height:100vh;
        
        /* @media (max-width:768px){
            width:initial;
        } */
    }
`

const ImageTitle=styled.div`
    /* border: 2px solid yellow; */
    display: flex;
    /* align-items: flex-end; */
    /* justify-content: flex-start; */
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;

    img{
        /* border:2px solid red; */
        max-width: 600px;
        min-width: 200px;
        width:35vw;
    }
`

const ContentMeta=styled.div`
    /* border:2px solid red; */
    max-width: 874px;
    
`
 const Controls=styled.div`
    /* border:2px solid red; */
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin:24px 0px;
    min-height: 56px;
`
const Player=styled.button`
    font-size: 15px;
    margin:0px 22px 0px 0px;
    padding:0px 24px;
    height:56px;
    border-radius: 4px;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    background: rgb(249,249,249);
    border:none;
    color:rgb(0,0,0);

    img{
        width: 32px;
    }
    &:hover{
        background: rgb(198,198,198);
        border-color: white;
        transform: scale(1.05);
        box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,rgb(0 0 0 / 72%) 0px 16px 10px -10px ;
    }

    @media (max-width:768px){
        height: 45px;
        padding:0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img{
            width:24px;
        }
    }

`

const Trailer=styled(Player)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
`

const AddList=styled.div`
    margin-right: 16px;
    height: 44px;
    width:44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);
    border-radius: 50%;
    border:1px solid white;
    cursor:pointer;

    span{
        background-color:rgba(249,249,249);
        display:inline-block;

        &:nth-child(1){
            height: 2px;
            width:16px;
            transform: translate(1px,0px) rotate(0deg);
        }
        &:nth-child(2){
            height: 16px;
            width:2px;
            transform: translate(-8px) rotate(0deg);
        }
    }

    &:hover{
        background: rgb(198,198,198);
        border-color: white;
        transform: scale(1.05);
        box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,rgb(0 0 0 / 72%) 0px 16px 10px -10px ;
    }
`

const GroupWatch=styled.div`
    border:1px solid white;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: rgb(0,0,0);
    height: 44px;
    width:44px;

    img{
        width: 100%;
    }

    &:hover{
        background: rgb(198,198,198);
        border-color: white;
        transform: scale(1.05);
        box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,rgb(0 0 0 / 72%) 0px 16px 10px -10px ;
    }
`

const SubTitle=styled.div`
    word-wrap: break-word;
    /* border:2px solid yellow; */
    color:rgba(249,249,249);
    font-size:15px;
    min-height: 20px;
    
    
    @media (max-width:768px){
        font-size:12px;
    }
    `

const Description=styled.div`
    /* width: 100%; */
    /* border:2px solid yellow; */
    word-wrap: break-word;
    font-size: 20px;
    padding:16px 0px;
    color:rgb(249,249,249);
    /* min-height: 20px; */


    @media (max-width:768px){
        font-size:14px;
    }
`