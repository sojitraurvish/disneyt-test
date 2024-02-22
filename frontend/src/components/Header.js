import React, { useEffect } from 'react'
import styled from 'styled-components'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/actions/userActions'
import { createAction } from '../utils/reducer.utils'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    
    const dispatch=useDispatch();
    const navigate=useNavigate()
    
    const {userInfo,loading,error}=useSelector((state)=>state.userLogin)
    
    useEffect(()=>{
        if(!userInfo){
            navigate("/")
        }
        if(userInfo){

            navigate("/home")
        }
    },[userInfo])
    
    const handleAuth=()=>{
        if(!userInfo){
            dispatch(login())

        }
        else if(userInfo){

            dispatch(logout())
        }
    }

  return (
    <Nav>
        <Logo to="/">
            <img src='/images/logo.svg' alt='disney'/>
        </Logo>

        {
            userInfo 
            ? (

                <>
                <NavMenu>
                    <Link to='/home'>
                        <img src="/images/home-icon.svg" alt='home'/>
                        <span>Home</span>
                    </Link>
                    <Link to='/search'>
                        <img src="/images/search-icon.svg" alt='search'/>
                        <span>Search</span>
                    </Link>
                    <Link to='/watchlist'>
                        <img src="/images/watchlist-icon.svg" alt='watchlist'/>
                        <span>Watchlist</span>
                    </Link>
                    <Link to='/original'>
                        <img src="/images/original-icon.svg" alt='original'/>
                        <span>Original</span>
                    </Link>
                    <Link to='/movie'>
                        <img src="/images/movie-icon.svg" alt='movie'/>
                        <span>Movie</span>
                    </Link>
                    <Link to='/series'>
                        <img src="/images/series-icon.svg" alt='series'/>
                        <span>Series</span>
                    </Link>
                
                </NavMenu>
                <SignOut>
                    <UserImg src={`${userInfo.user.photoURL}`} alt="userImg"/>
                    <Dropdown>
                        <span onClick={handleAuth}>Sign out</span>
                    </Dropdown>
                </SignOut>
                </>
            )
            :(

            <Login onClick={handleAuth}>
                Login
            </Login>
            )
            
        }

    </Nav>
  )
}

export default Header

const Nav=styled.nav`
    /* border: 2px solid yellow; */
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3000;
`

const Logo=styled(Link)`
    /* border:2px solid yellow; */
    padding: 0;
    width: 100px;
    margin-top: 4px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`

const NavMenu=styled.div`
    /* border:2px solid yellow; */
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    margin: auto;
    margin-left: 25px;

    a{
        /* border:2px solid yellow; */
        display: flex;
        align-items: center;
        padding: 0 12px;
        position: relative;
        img{
            /* border:2px solid yellow; */
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        
        span{
            /* border:2px solid yellow; */
            margin-top: 4px;
            margin-left: 2px;
            color:rgb(249,249,249);
            font-size:13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            white-space: nowrap;
            position: relative;
            padding:2px 0px;


            &:before{
                content: "";
                background-color: white;
                border-radius: 4px;
                height: 3px;
                position: absolute;
                bottom: -6px;
                transition: all 250ms ease-in-out 0s;
                width: 0%;
                opacity: 0;
                visibility: hidden;
            }
        }
             

        &:hover{
            span:before{
                width: 100%;
                opacity: 1 !important;
                visibility:visible ;
            }
        }

        
        
    }


    @media (max-width:768px){
        display: none;
    }
`

const UserImg=styled.img`
        height: 100%;
`

const Dropdown=styled.div`
    position: absolute;
    top:60px;
    right: 0;
    background-color: rgba(19,19,19);
    border: 1px solid rgba(151,151,151,0.34);
    /* border:2px solid yellow; */
    border-radius: 4px;
    box-shadow: rgb(0,0,0/50%) 0px 0px 18px 0px;
    padding:10px;
    /* padding-right: 0px; */
    font-size: 14px;
    letter-spacing: 3px;
    width: 230%;
    display: flex;
    justify-content: center;
    text-align: center;
    opacity: 0;
    /* visibility: hidden; */
    /* display: none; */

    &:hover{
        background-color: white;
        color: black;
    }

    span{
        width: 100%;
        /* border: 2px solid yellow; */
    }
`

const SignOut=styled.div`
    /* border:2px solid yellow; */
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:all 25ms ease-in-out 0s;
    
    ${UserImg}{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    
    &:hover{
        ${Dropdown}{
            opacity: 1;
            /* display: block; */
            /* visibility: visible; */
            transition-duration: 1s;
        }
    }
`



const Login=styled.a`
    background-color: transparent;
    border:1px solid white;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover{
        cursor: pointer;
        background-color: white;
        color:black;
        border-color: transparent;
    }

`