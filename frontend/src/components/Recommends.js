import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Recommends = () => {

    const {movies,loading,error}=useSelector((state)=>state.movieList)

  return (
    <Container>
        <h4>Recommended For You</h4>
        <Content>

            {
                movies &&
                movies.filter((item)=>(item.type==="recommend")).map((subitem)=>(
                    <Wrap key={subitem._id}>
                        <Link to={`/details/${subitem._id}`}>
                        <img src={subitem.cardImg} alt={subitem.title} />
                        </Link>
                        
                    </Wrap>
                ))
            }
            {
                movies &&
                movies.slice(15, 16).map((subitem)=>(
                    <Wrap key={subitem._id}>
                        <Link to={`/details/${subitem._id}`}>
                        <img src={subitem.cardImg} alt={subitem.title} />
                        </Link>
                        
                    </Wrap>
                ))
            }
            
            

        </Content>
    </Container>
  )
}

export default Recommends

const Container=styled.div`
    /* border:2px solid yellow; */
    margin-top: 15px;
`

const Content=styled.div`
    /* border:2px solid red; */
    padding:30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5,minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`

const Wrap=styled.div`
    /* border:2px solid yellow; */
    cursor:pointer;
    overflow:hidden;
    padding-bottom: 56.25%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border:2px solid rgba(249,249,249,0.1);
    border-radius:10px;
    transition: all 1s ease 0s;
    position:relative;

    img{
        width:100%;
        height:100%;
        position: absolute;
        display: block;
        inset: 0;
        object-fit:cover;
        top: 0;
        z-index: 1;
        opacity: 1; 
        transition:opacity 10s ease 0s;
    }

    &:hover{
        border-color: white;
        transform: scale(1.05);
        box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,rgb(0 0 0 / 72%) 0px 16px 10px -10px ;
    }
`